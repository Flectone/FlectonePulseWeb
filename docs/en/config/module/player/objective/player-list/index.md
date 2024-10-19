# Player list
Path `config.yml > module.player.objective.player-list`

## Explanation
[ScoreBoard value](https://minecraft.wiki/w/Scoreboard) of a player in TAB
![player list](/playerlist.png)

## Edit
```yaml
<config.module.player.player-list>
```

### Default
```yaml
player-list:
  enable: true
  mode: PING
  permission:
    name: "flectonepulse.module.player.objective.player_list"
    type: TRUE
  ticker:
    enable: true
    period: 100
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `mode`
- Default `PING`

Digital value display mode from [available](#modes-values)

::: tip For example `PING` mode
So the ping of the player will be returned
![player list](/playerlist.png)
:::

### `permission`
- Name `flectonepulse.module.player.objective.player_list`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `ticker`
- `enable: true`

If enabled, changes the value every time interval

- `period: 100`

How often value in [ticks](https://minecraft.wiki/w/Tick) should be changed

<!--@include: @/en/parts/objective.md-->