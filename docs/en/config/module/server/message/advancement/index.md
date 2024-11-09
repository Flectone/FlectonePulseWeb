# Advancement
Path `config.yml > module.server.message.advancement`

## Explanation
A message from server when a player gets an achievement
![task](/task.png)

## Edit
```yaml
<config.module.server.message.advancement>
```

### Default
```yaml
advancement:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.advancement"
    type: TRUE
  revoke:
    enable: true
  grant:
    enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.advancement.sound"
      type: TRUE
```

## Options

- Messages are changed here [Advancement](/en/messages/en_us/module/server/message/advancement/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.advancement`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `revoke`
- `enbale: true`

Enable changing messages for `/advancement revoke` command

### `grant`
- `enbale: true`

Enable changing messages for `/advancement grant` command

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and pitch (`1`) of the sound via `:`

### `permission`
- Name `flectonepulse.module.server.message.advancement.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::