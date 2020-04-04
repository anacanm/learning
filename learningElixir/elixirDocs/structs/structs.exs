defmodule User do
  @enforce_keys [:name]
  defstruct [:age, name: "John"]
end

