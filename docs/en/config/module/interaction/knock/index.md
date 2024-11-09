# Knocks
Path `config.yml > module.interaction.knock`

## Explanation
Knocks are created by **SHIFT** and **LCM** on a particular block, producing a sound

## Edit
```yaml
<config.module.interaction.knock>
```

### Default
```yaml
knock:
  enable: false
  permission:
    name: "flectonepulse.module.interaction.knock"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.knock.cooldown.ignore"
      type: OP
  type:
    GLASS:
      enable: true
      type: "BLOCK_GLASS_PLACE:1:1"
      permission:
        name: "flectonepulse.module.interaction.knock.sound.glass"
        type: TRUE
    DOOR:
      enable: true
      type: "BLOCK_WOOD_PLACE:1:1"
      permission:
        name: "flectonepulse.module.interaction.knock.sound.door"
        type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Options

### `enable`
- Default `false`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.interaction.knock`
- Type `TRUE`

[Permission](#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.knock.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `type`

List of block names and knock sounds

You can create your own knocks and the block name can be incomplete, but only contain the keyword

::: tip For example, I want to make a knock for all kinds of glass
Then I will write the name `GLASS`

```yaml
GLASS:
  enable: true
  type: "BLOCK_GLASS_PLACE:1:1"
  permission:
    name: "flectonepulse.module.interaction.knock.sound.glass"
    type: TRUE            
```

### `enable`
- Default `true`

Enables sound when using

::: details Sound setting
#### `type`
- Default `BLOCK_GLASS_PLACE:1:1`

Specifies the type (`BLOCK_GLASS_PLACE`), volume (`1`) and tone (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.interaction.knock.sound.glass`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default `PlayerInteractEvent: NORMAL`

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->