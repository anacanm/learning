defmodule DialectTest.Repo do
  use Ecto.Repo,
    otp_app: :dialect_test,
    adapter: Ecto.Adapters.Postgres
end
