# Clear
Path `config.yml > module.server.message.clear`

## Explanation
Message from server when using `/clear`
![clear](/clear.png)

## Редактирование
```yaml
<config.module.server.message.clear>
```

### Default
```yaml
clear:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.clear"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.clear.sound"
      type: TRUE
```

## Options

- Messages are changed here [Clear](/en/messages/en_us/module/server/message/clear/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.clear`
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
- Name `flectonepulse.module.server.message.clear.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::
