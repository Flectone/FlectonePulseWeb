# Auto
Path `config.yml > module.server.message.auto`

## Explanation
A message from server once every certain period of time
![auto](/auto.png)

## Edit
```yaml
<config.module.server.message.auto>
```

### Default
```yaml
auto:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.message.auto"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.auto.sound"
      type: TRUE
  ticker:
    enable: true
    period: 9000
```

## Options

- Messages are changed here [Auto](/en/messages/en_us/module/server/message/auto/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `random`
- Default `true`

If enabled, message will be selected randomly, otherwise in order

### `permission`
- Name `flectonepulse.module.server.message.auto`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and pitch (`1`) of the sound via `:`

### `permission`
- Name `flectonepulse.module.server.message.auto.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `ticker`
- `enable: true`

Whether to send a message once every certain period of time

- `period: 9000`

How often in [ticks](https://minecraft.wiki/w/Tick) needs to sent
