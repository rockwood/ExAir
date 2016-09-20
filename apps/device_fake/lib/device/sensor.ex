defmodule Device.Sensor do
  use GenServer

  @name __MODULE__

  defmodule State do
    defstruct [
      current: 0
    ]
  end

  def start_link(pin) do
    GenServer.start_link(__MODULE__, [pin], name: @name)
  end

  def init([pin]) do
    state = struct(State)
    {:ok, state}
  end

  def read do
    GenServer.call(@name, :read)
  end

  def handle_call(:read, _from, state) do
    current = Enum.random(1..100)
    {:reply, current, Map.put(state, :current, current)}
  end
end
