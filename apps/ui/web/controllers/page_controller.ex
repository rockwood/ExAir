defmodule Ui.PageController do
  use Ui.Web, :controller

  def index(conn, _params) do
    render conn, "index.html", sensor_value: Device.Sensor.read
  end
end
