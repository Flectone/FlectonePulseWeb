# Setblock
Path `config.yml > module.server.message.setblock`

## Explanation
Message from server when using `/setblock`
![setblock](/setblock.png)

## Edit
```yaml
<config.module.server.message.setblock>
```

### Default
```yaml
setblock:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.setblock"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.setblock.sound"
      type: TRUE
```

## Options

- Messages are changed here [Setblock](/en/messages/en_us/module/server/message/setblock/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.setblock`
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
- Name `flectonepulse.module.server.message.setblock.sound`
- Typ `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::
