# Enchant
Path `config.yml > module.server.message.enchant`

## Explanation
Message from server when using `/enchant`
![enchant](/enchant.png)

## Edit
```yaml
<config.module.server.message.enchant>
```

### Default
```yaml
op:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.enchant"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.enchant.sound"
      type: TRUE
```

## Options

- Messages are changed here [Enchant](/en/messages/en_us/module/server/message/enchant/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.enchant`
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

- Name `flectonepulse.module.server.message.enchant.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::
