use Mix.Config

# Configure your database
config :dialect_test, DialectTest.Repo,
  username: "postgres",
  password: "postgres",
  database: "dialect_test_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :dialect_test, DialectTestWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
