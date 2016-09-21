# DeviceFake

The `Device` application depends on [ElixirAle](https://github.com/fhunleth/elixir_ale) which only
compiles on linux platforms. Nerves provides the target platform during the firmware build phase.
During development, `DeviceFake` provides a stand-in replacement for the `Device` API.
