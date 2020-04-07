defmodule DialectTestWeb.Router do
  use DialectTestWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", DialectTestWeb do
    pipe_through :api

    resources "/users", UserController
  end
end
