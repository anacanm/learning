defmodule Recurse do

  def print_mes(msg, n) when n <= 1 do
    IO.puts(msg)
  end

  def print_mes(msg, n) do
    IO.puts(msg)
    print_mes(msg, n-1)
  end
end

