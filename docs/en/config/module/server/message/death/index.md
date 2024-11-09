# Death
Path `config.yml > module.server.message.death`

## Explanation
A message from server when a player dies
![death server](/deathserver.png)
![death player](/deathplayer.png)

## Edit
```yaml
<config.module.server.message.death>
```

### Default
```yaml
death:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.death"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.death.sound"
      type: TRUE
```

## Options

- Messages are changed here [Death](/en/messages/en_us/module/server/message/death/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.death`
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
- Name `"flectonepulse.module.server.message.death.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::
