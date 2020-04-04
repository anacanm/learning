defmodule KV.Bucket do
  use Agent, restart: :temporary

  @doc """
  Starts a new bucket
  """
  def start_link(opts \\ []) do
    Agent.start_link(fn -> %{} end, opts)
  end

  @doc """
  Adds a key: value pair to the bucket
  """
  def put(pid, key, val) do
    Agent.update(pid, fn state -> Map.put(state, key, val) end)
  end

  @doc """
  Returns a value from the specified bucket with a specified key
  """
  def get(pid, key) do
    Agent.get(pid, fn state -> state[key] end)
  end

  @doc """
  Deletes the specified key:value pair and returns the value
  """
  def delete(pid, key) do
    Agent.get_and_update(pid, &Map.pop(&1, key))
  end
end
