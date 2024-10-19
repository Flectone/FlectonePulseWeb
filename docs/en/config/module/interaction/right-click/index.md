# Right click
Path `config.yml > module.interaction.right_click`

## Explanation
A module where **RCM** on a player creates a message
![right click](/rightclick.png)

## Edit
```yaml
<config.module.interaction.right_click>
```

### Default
```yaml
right-click:
  enable: true
  permission:
    name: "flectonepulse.module.interaction.right_click"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.right_click.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.right_click.sound"
      type: TRUE
  listener:
    PlayerInteractAtEntityEvent: MONITOR
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.interaction.right_click`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.right_click.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
#### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and pitch (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.interaction.right_click.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerInteractAtEntityEvent: MONITOR
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->