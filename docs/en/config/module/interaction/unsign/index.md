# Un Sign
Path `config.yml > module.interaction.unsign`

## Explanation
Resign by **RCM** on stone cutter if player is holding the item with sign in his **main** hand
![unsign](/unsign.gif)

::: info Condition
A player can only remove his sign
:::

## Edit
```yaml
<config.module.interaction.unsign>
```

### Default
```yaml
unsign:
  enable: false
  drop-dye: true
  block: "GRINDSTONE"
  permission:
    name: "flectonepulse.module.interaction.unsign"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.unsign.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.unsign.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Options

### `enable`
- Default `false`

Enables or disables the functionality of the module

### `drop-dye`
- Default `true`

Enable dye drop
![unsign](/unsign.gif)

### `block`
- Default `GRINDSTONE`

Block to be clicked on to remove the sign

### `permission`
- Name `flectonepulse.module.interaction.unsign`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module


### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.unsign.cooldown.ignore`
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
- Name `flectonepulse.module.interaction.unsign.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default `PlayerInteractEvent: NORMAL`

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->