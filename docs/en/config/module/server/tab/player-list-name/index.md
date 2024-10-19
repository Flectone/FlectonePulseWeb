# Player list name
Path `config.yml > module.server.tab.player-list-name`

## Explanation
Module for the player's name in TAB
![player list name](/playerlistname.png)

## Edit
```yaml
<config.module.server.tab.player-list-name>
```

### Default
```yaml
player-list-name:
  enable: true
  permission:
    name: "flectonepulse.module.server.tab.player_list_name"
    type: TRUE
  listener:
    PlayerChangedWorldEvent: MONITOR
  ticker:
    enable: true
    period: 100
```

## Options

- Message changes here [Player list name](/en/messages/en_us/module/server/tab/player-list-name/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.tab.player_list_name`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
PlayerChangedWorldEvent: MONITOR
```

List of event listeners and their [priority](#event-priority)

### `ticker`
- `enable: true`

Does name in TAB need to be updated once every certain period of time

- `period: 100`

How often the name in [ticks](https://minecraft.wiki/w/Tick) needs to be updated

<!--@include: @/en/parts/listener.md-->