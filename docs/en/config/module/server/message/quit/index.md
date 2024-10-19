# Quit
Path `config.yml > module.server.message.quit`

## Explanation
A message from server when a player has disconnected
![quit](/quit.png)

## Edit
```yaml
<config.module.server.message.quit>
```

### Default
```yaml
quit:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.quit"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.quit.sound"
      type: TRUE
  listener:
    PlayerQuitEvent: LOWEST
```

## Options

- Messages are changed here [Quit](/en/messages/en_us/module/server/message/quit/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.quit`
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
- Name `"flectonepulse.module.server.message.quit.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerQuitEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->
