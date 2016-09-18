defmodule Device.Mixfile do
  use Mix.Project

  def project do
    [app: :device,
     version: "0.1.0",
     build_path: "../../_build",
     config_path: "../../config/config.exs",
     deps_path: "../../deps",
     lockfile: "../../mix.lock",
     elixir: "~> 1.3",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  def application do
    [applications: [:logger, :elixir_ale]]
  end

  defp deps do
    [
      {:elixir_ale, "~> 0.5.6"}
    ]
  end
end
