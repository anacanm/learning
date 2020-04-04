defmodule KV.Registry do
  @moduledoc """
  KV.Registry implements a GenServer that holds names and coordinating PIDs for Buckets(Agents created in lib/kv/bucket.ex, they hold maps) as a map
  """
  use GenServer

  @doc """
  KV.Registry.start/0 creates a new linked GenServer
  """
  @spec start_link() :: PID
  def start_link(opts \\ []) do
    GenServer.start_link(KV.Registry, :ok, opts)
  end

  @doc """
  KV.Registry.create(server, bucketName) takes a String and creates a new registered bucket, updating GenServer's state to hold a new key: value pair that is the
  bucketName: bucketPID
  if there exists a bucket with the same bucketName, the state goes unmodified and exits
  returns :ok if successful
  """
  @spec create(PID, String.t()) :: :ok
  def create(server, bucketName) do
    GenServer.cast(server, {:create, bucketName})
  end

  @doc """
  KV.Registry.lookup(server, bucketName) takes a serverPID and a bucket name returns {:ok, PID} if the bucketName is registered
  if the bucketName is not registered, returns :error
  """
  @spec lookup(PID, String.t()) :: {:ok, PID}
  def lookup(server, bucketName) do
    GenServer.call(server, {:lookup, bucketName})
  end

  # * begin implementing callbacks
  @impl true
  def init(:ok) do
    names = %{}
    refs = %{}
    {:ok, {names, refs}}
  end

  @impl true
  def handle_call({:lookup, bucketName}, _from, {names, refs}) do
    {:reply, Map.fetch(names, bucketName), {names, refs}}
  end

  @doc """
  handle_cast/2 creates a new bucket and stores  a specified name and its coordinated PID as a key value pair
  if the bucketName already exists in the state of this GenServer, then handle_cast/2 returns the current state with no modifications
  """
  @impl true
  def handle_cast({:create, bucketName}, {names, refs}) do
    # if tha map already has a bucket by the specified bucketName, then do nothing and return the existing map
    if Map.has_key?(names, bucketName) do
      {:noreply, {names, refs}}
    else
      # otherwise, cretae a new bucket that is DynamicallySupervised, monitor the bucket, and store the bucket monitorReference: bucketName as a key :value pair into the refs map
      # and store its bucketName: bucketPID as a key: value pair into the names map
      {:ok, bucketPID} = DynamicSupervisor.start_child(KV.BucketSupervisor, KV.Bucket)
      ref = Process.monitor(bucketPID)
      refs = Map.put(refs, ref, bucketName)
      names = Map.put(names, bucketName, bucketPID)
      {:noreply, {names, refs}}
    end
  end

  @impl true
  def handle_info({:DOWN, ref, :process, _pid, _reason}, {names, refs}) do
    # ! handle_info with this pattern handles any failed monitored processes
    # ! this funciton receieves a message via Process.monitor/0 sending it to the GenServer when the process being monitored shuts down or crashes
    # ! we can then remove it from our state and monitoring
    # this removes the specific agent from the monitoring map, and returns its value: the bucketName and the updated map
    {name, refs} = Map.pop(refs, ref)
    #this deletes the name of the agent that shutdown/crashed from the names map and returns the updated map
    names = Map.delete(names, name)
    {:noreply, {names, refs}}
  end

  @impl true
  def handle_info(_msg, state) do
    {:noreply, state}
  end
end
