# Command /dice
Path `config.yml > module.command.command-dice`

## Explanation
The command to roll the dice for good luck
![command dice](/commanddice.png)

## Edit
```yaml
<config.module.command.command-dice>
```

### Default
```yaml
command-dice:
  enable: true
  range: -2
  min: 1
  max: 6
  aliases:
    - "dice"
  permission:
    name: "flectonepulse.module.command.dice"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.dice.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.dice.sound"
      type: TRUE
```

## Options

- Messages are changed here [Dice](/en/messages/ru_ru/module/command/command-dice/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `min`
- Default `1`

Minimum number of cubes

### `max`
- Default `6`

Maximum number of cubes

### `aliases`
- Default `dice`

List of aliases for using the command

::: tip Aliases can be anything
For example `newdice`, `cube`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.dice`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.dice.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
#### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and tone (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.command.dice.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->