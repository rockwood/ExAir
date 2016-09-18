# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

config :ui, Ui.Endpoint,
  http: [port: 80],
  url: [host: "localhost", port: 80],
  secret_key_base: "NJx7UkE5R7KebBayH9udMAUS/fcbXHbh/geGWSvcTa1UOR0UKD0Sl3GHN1CO246o",
  root: Path.dirname(__DIR__),
  server: true,
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Ui.PubSub, adapter: Phoenix.PubSub.PG2],
  check_origin: false

config :logger, level: :debug

# Import target specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
# Uncomment to use target specific configurations

# import_config "#{Mix.Project.config[:target]}.exs"
