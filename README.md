# ExAir

Nerves powered air quality monitor.

## Development

    cd apps/ui
    npm install
    mix deps.get
    mix phoenix.server

## Building the Firmware

    cd apps/fw
    mix deps.get
    MIX_ENV=prod mix do firmware, firmware.burn

## Applications

The ExAir umbrella project contains 4 separate applications.

**FW** - Firmware application that includes Nerves and it's dependencies.

**UI** - Phoenix application used to build the user interface.

**Device** - Hardware interface using [ElixirAle](https://github.com/fhunleth/elixir_ale).

**DeviceFake** - Provides a stand-in replacement for `Device` and is used during development.


                     +-----------------+
                     |                 |
                     |   FW (Nerves)   |
                     |                 |
                     +-----------------+
                              |
                              |
                     +--------v--------+
                     |                 |
              +------+  UI (Phoenix)   +------+
              |      |                 |      |
              |      +-----------------+      |
            prod                           dev/test
              |                               |
    +---------v----------+         +----------v---------+
    |                    |         |                    |
    | Device (ElixirAle) |         |    Device Fake     |
    |                    |         |                    |
    +--------------------+         +--------------------+
