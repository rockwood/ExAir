defmodule Device.Sensor do
  use GenServer

  @name __MODULE__

  defmodule State do
    defstruct [
      gpio: nil,
      current: 0,
      poll_interval: 100
    ]
  end

  def start_link(pin) do
    GenServer.start_link(__MODULE__, [pin], name: @name)
  end

  def init([pin]) do
    {:ok, gpio_pid} = Gpio.start_link(pin, :input)
    state = struct(State, gpio: gpio_pid)
    {:ok, state}
  end

  def read do
    GenServer.call(@name, :read)
  end

  def handle_call(:read, _from, %{gpio: gpio_pid} = state) do
    current = Gpio.read(gpio_pid)
    {:reply, current, Map.put(state, :current, current)}
  end
end
