defmodule Docs.Case do
  def test_case() do
    x = 5
    case {1, 2, 3} do
      {1, 2, 3} ->
        IO.puts("This won't match")
        x = 50
        IO.puts("inner #{x}")

      {1, x, 3} ->
        IO.puts("This will match, and bind x to 2 in this scope")
        IO.puts(x)

      _ ->
        "default"
    end

    IO.puts("outer #{x}")
  end
end
