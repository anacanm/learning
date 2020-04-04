defmodule DoubleList do
  def double([head | tail]) do
    [head*2 | double(tail)]
  end

  def double([]) do
    []
  end
end
