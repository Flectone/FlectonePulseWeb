# Sign
Path `config.yml > module.interaction.sign`

## Explanation
The sign is created on the item by **LCM** on anvil if player holds the dye in **additional** hand and the item in **main** hand
![sign](/sign.gif)

## Edit
```yaml
<config.module.interaction.sign>
```

### Default
```yaml
sign:
  enable: true
  drop-dye: true
  block: "ANVIL"
  permission:
    name: "flectonepulse.module.interaction.sign"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.sign.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.sign.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Options

- The sign message changes here [Sign](/en/messages/en_us/module/interaction/sign/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `drop-dye`
- Default `true`

Enable dye drop if resign
![resign](/resign.gif)

### `block`
- Default `ANVIL`

Block to be clicked on for sign

### `permission`
- Name `flectonepulse.module.interaction.sign`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module


### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.sign.cooldown.ignore`
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
- Name `flectonepulse.module.interaction.sign.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default `PlayerInteractEvent: NORMAL`

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->