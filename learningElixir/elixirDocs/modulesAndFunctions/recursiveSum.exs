defmodule RecursiveSum do
  def sum_list(list, sum) when length(tl(list)) < 1 do
    IO.puts(sum + hd(list))
  end

  def sum_list(list, sum) do
    sum_list(tl(list), sum + hd(list))
  end
end
