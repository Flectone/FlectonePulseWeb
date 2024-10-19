# Join
Path `config.yml > module.server.message.join`

## Explanation
A message from server when a player has connected
![join](/join.png)

## Edit
```yaml
<config.module.server.message.join>
```

### Default
```yaml
join:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.join"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.join.sound"
      type: TRUE
  listener:
    PlayerJoinEvent: HIGHEST
```

## Options

- Messages are changed here [Join](/en/messages/en_us/module/server/message/join/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.join`
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
- Default `"flectonepulse.module.server.message.join.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerJoinEvent: HIGHEST
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->
