# Team
Path `config.yml > module.player.team`

## Explanation
Module for [ScoreBoard command](https://minecraft.wiki/w/Commands/team) player

## Edit
```yaml
<config.module.player.team>
```

### Default
```yaml
team:
  enable: true
  name-visible: false
  prefix: "<vault_prefix><stream_prefix>"
  suffix: "<afk_suffix><vault_suffix>"
  color: "<white>"
  permission:
    name: "flectonepulse.module.player.team"
    type: TRUE
  listener:
    PlayerJoinEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `name-visible`
- Default `false`

Enables or disables nickname above the player

### `prefix`
- Default `<prefix>`

Text to the player's nickname: `text TheFaser`

### `suffix`
- Default `<suffix>`

Text after the player's nickname: `TheFaser text`

### `color`
- Default `<white>`

Player's team color from [available](#available-colors)

### `permission`
- Name `flectonepulse.module.player.team`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
AsyncPlayerChatEvent: MONITOR
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/color.md-->
<!--@include: @/en/parts/listener.md-->