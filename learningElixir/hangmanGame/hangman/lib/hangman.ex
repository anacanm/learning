defmodule Hangman do
  # this creates an alias called Game for Hangman.Game. there is a second option , as: aliasName, that defaults to the last part of the original name
  alias Hangman.Game

  # defdelegate delegates the function call to the module Hangman.Game, so that Hangman truly has no real functionality
  # calling Hangman.new_game() really calls Hangman.Game.new_game()
  defdelegate new_game(), to: Game
end
