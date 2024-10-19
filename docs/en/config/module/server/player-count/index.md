# Player count
Path `config.yml > module.server.player-count`

## Explanation
Module for number of players on server
![player count](/playercount.png)

## Edit
```yaml
<config.module.server.player-count>
```

### Default
```yaml
player-count:
  enable: true
  control: true
  number: 69
  permission:
    name: "flectonepulse.module.server.player_count"
    type: TRUE
  permission-ignore:
    name: "flectonepulse.module.server.player_count.ignore"
    type: TRUE
  listener:
    ServerListPingEvent: NORMAL
    PlayerLoginEvent: NORMAL
```

## Options

- The full server message changes here [Number of players](/en/messages/en_us/module/server/player-count/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `control`
- Default `true`

If enabled, player will not be allowed into server if there are more players than [specified](#number)

### `number`
- Default `69`

Maximum number of players on the server

### `permission`
- Name `flectonepulse.module.server.player_count`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `permission-ignore`
- Name `flectonepulse.module.server.player_count.ignore`
- Type `TRUE`

Permission to ignore [maximum number of players](#control)

### `listener`
- Default:
```yaml
ServerListPingEvent: NORMAL
PlayerLoginEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->