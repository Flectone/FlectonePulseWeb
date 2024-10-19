# Mark
Path `config.yml > module.interaction.mark`

## Explanation
The mark is created with **RCM** and a wooden sword in the main hand
![mark](/mark.gif)

::: info Condition
The sword can be renamed in Anvil to [available-color](#available-colors), for example `RED` and the mark will be red
:::

## Edit
```yaml
<config.module.interaction.mark>
```

### Default
```yaml
mark:
  enable: true
  limit: true
  color: true
  range: 100
  duration: 60
  item: "WOODEN_SWORD"
  entity: "MAGMA_CUBE"
  permission:
    name: "flectonepulse.module.interaction.mark"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.mark.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.mark.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `limit`
- Default `true`

Does not allow you to make more than one tag as long as it exists

### `color`
- Default `true`

Enables the ability to color mark. Sword must be renamed to one of [available-colors](#available-colors)

### `range`
- Default `100`

Distance in blocks, how far you can place the tag

### `duration`
- Default `60`

How many [ticks](https://minecraft.wiki/w/Tick) will be [limit](#limit)

### `item`
- Default `WOODEN_SWORD`

Material with which the mark is placed

### `entity`
- Default `MAGMA_CUBE`

The mob's hitbox, which is used to create mark

### `permission`
- Название `flectonepulse.module.interaction.mark`
- Тип `TRUE`

[Permission](/en/config/module/#explanation) to use the module


### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.mark.cooldown.ignore`
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
- Name `flectonepulse.module.interaction.mark.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default `PlayerInteractEvent: NORMAL`

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->
<!--@include: @/en/parts/color.md-->