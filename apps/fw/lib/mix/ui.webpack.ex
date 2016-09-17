defmodule Mix.Tasks.Ui.Webpack do
  use Mix.Task
  @shortdoc "Execute webpack"
  @executable "node_modules/webpack/bin/webpack.js"
  @flags ["--colors", "--progress"]

  # We need to run in the context of the ui project and changing directories appears to be the
  # only way to do that.
  def run(_args) do
    project_path = System.cwd()
    :ok = File.cd(Path.expand("../ui"))

    Mix.shell.info("\nBuilding assets")
    @executable
    |> Path.expand
    |> System.cmd(@flags, into: IO.stream(:stdio, :line))

    Mix.shell.info("\nDigesting assets")
    System.cmd("mix", ["phoenix.digest"], into: IO.stream(:stdio, :line))

    :ok = File.cd(project_path)
  end
end
