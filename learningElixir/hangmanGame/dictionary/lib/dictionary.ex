defmodule Dictionary do
  def random_word do
    word_list()
    |> Enum.random()
  end

  def word_list do
    "../assets/words.txt"
    # Path.expand(path, relative_to) expands the absolute path to the relative path, then applies the first argument.  __DIR__ is the source file of this file
    # So, it expands the current directory __DIR__ of this file, then moves up a directory, into assets, and accesses words.txt
    |> Path.expand(__DIR__)
    |> File.read!()
    |> String.split("\n")
  end
end
