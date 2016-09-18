defmodule Ui.SensorsChannel do
  use Ui.Web, :channel

  def join("sensors:button", payload, socket) do
    send(self, :read)
    {:ok, socket}
  end

  def handle_info(:read, socket) do
    push socket, "change", %{value: Device.Sensor.read}
    Process.send_after(self, :read, 1_000)
    {:noreply, socket}
  end
end
