# Below name
Path `config.yml > module.player.objective.below-name`

## Explanation
[ScoreBoard value](https://minecraft.wiki/w/Scoreboard) of player under his nickname
![below name](/belowname.png)

## Edit
```yaml
<config.module.player.below-name>
```

### Default
```yaml
below-name:
  enable: false
  mode: PING
  permission:
    name: "flectonepulse.module.player.objective.below_name"
    type: TRUE
  ticker:
    enable: true
    period: 100
```

## Options

### `enable`
- Default `false`

Enables or disables the functionality of the module

### `mode`
- Default `PING`

Digital value display mode from [available](#modes-values)

::: tip For example `PING` mode
So the ping of the player will be returned
![below name](/belowname.png)
:::

### `permission`
- Name `flectonepulse.module.player.objective.below_name`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `ticker`
- `enable: true`

If enabled, changes the value every time interval

- `period: 100`

How often value in [ticks](https://minecraft.wiki/w/Tick) should be changed

<!--@include: @/en/parts/objective.md-->