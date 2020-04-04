defmodule KV.Supervisor do
  use Supervisor

  def start_link(opts \\ []) do
    Supervisor.start_link(__MODULE__, :ok, opts)
  end

  @impl true
  def init(:ok) do
    children = [
      {DynamicSupervisor, name: KV.BucketSupervisor, strategy: :one_for_one},
      {KV.Registry, name: KV.Registry}
    ]

    # starts the registry of monitors and a DynamicSupervisor to monitor the creation of buckets
    Supervisor.init(children, strategy: :one_for_all)
  end
end
