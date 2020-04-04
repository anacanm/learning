defmodule KV do
  @moduledoc """
  Documentation for `KV`.
  """
  use Application

  @doc """
  On application start, start the supervisor (and its children) with the name KV.Supervisor
  """
  @impl true
  def start(_type, _args) do
    KV.Supervisor.start_link(name: KV.Supervisor)
  end
end
