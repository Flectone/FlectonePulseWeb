# Greeting
Path `config.yml > module.server.message.greeting`

## Explanation
A message from server to player personally when he has connected
![greeting](/greeting.png)

## Edit
```yaml
<config.module.server.message.greeting>
```

### Default
```yaml
greeting:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.greeting"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.greeting.sound"
      type: TRUE
  listener:
    PlayerJoinEvent: MONITOR
```

## Options

- Messages are changed here [Greeting](/en/messages/en_us/module/server/message/greeting/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.greeting`
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
- Name `"flectonepulse.module.server.message.greeting.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerJoinEvent: MONITOR
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->
