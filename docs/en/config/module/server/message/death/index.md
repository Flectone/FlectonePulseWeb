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
  visible: true
  mob-default: true
  entity-hover: true
  permission:
    name: "flectonepulse.module.server.message.death"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.death.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: LOWEST
    EntityDamageEvent: LOWEST
    PlayerDeathEvent: LOWEST
```

## Options

- Messages are changed here [Death](/en/messages/en_us/module/server/message/death/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `visible`
- Default `true`

Enables the display of a death message from the plugin

### `mob-default`
- По умолчанию `true`

If enabled, one [message default](/en/messages/en_us/module/server/message/death/) is used for each death from any mob
![death mob](/deathmob.png)

If off, you need to write a different [message]((/en/messages/ru_ru/module/server/message/death/)) for each death from a mob

### `entity-hover`
- Default `true`

Enables displaying information about a mob when hovering over its name
![death hover](/deathhover.png)

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

### `listener`
- Default:
```yaml
PlayerInteractEvent: LOWEST
EntityDamageEvent: LOWEST
PlayerDeathEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->
