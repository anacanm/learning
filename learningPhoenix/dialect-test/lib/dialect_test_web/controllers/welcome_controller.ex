defmodule DialectTestWeb.WelcomeController do
  use DialectTestWeb, :controller

  def index(conn, params) do
    conn
    |> assign(:message, "Howdy World")
    |> json(params)
  end
end
