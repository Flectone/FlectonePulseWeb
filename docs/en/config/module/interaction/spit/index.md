# Spit
Path `config.yml > module.interaction.spit`

## Explanation
To spit, you hold **white dye** in your hand and press **RCM**
![spit](/spit.gif)

If a spit hit a player, he will be written about it
![spit message](/spit.png)

## Edit
```yaml
<config.module.interaction.spit>
```

### Default
```yaml
spit:
  enable: false
  message: true
  item: "WHITE_DYE"
  permission:
    name: "flectonepulse.module.interaction.spit"
    type: TRUE
  cooldown:
    enable: true
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.spit.cooldown.ignore"
      type: OP
  sound:
    enable: true
    type: "ENTITY_LLAMA_SPIT:0.3:1"
    permission:
      name: "flectonepulse.module.interaction.spit.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
    ProjectileHitEvent: LOWEST
```

## Options

- The message of a spit hit is modified here [Spit](/en/messages/en_us/module/interaction/spit/)

### `enable`
- Default `false`

Enables or disables the functionality of the module

### `message`
- Default `true`

Enable message of spit hitting the player
![spit message](/spit.png)

### `item`
- Default `WHITE_DYE`

The material used to create the spit

### `permission`
- Name `flectonepulse.module.interaction.spit`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module


### `cooldown`
- Default `true`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.interaction.spit.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`
- Default `true`

Turns on sound playback when using

::: details Sound setting
#### `type`
- Default `ENTITY_LLAMA_SPIT:0.3:1`

Specifies the type (`ENTITY_LLAMA_SPIT`), volume (`0.3`) and tone (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.interaction.spit.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerInteractEvent: NORMAL
ProjectileHitEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->