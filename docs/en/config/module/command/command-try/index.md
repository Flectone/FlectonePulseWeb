# Command /try
Path `config.yml > module.command.command-try`

## Explanation
Command to display the execution of an action with chance
![command try](/commandtry.png)

## Edit
```yaml
<config.module.command.command-try>
```

### Default
```yaml
command-try:
  enable: true
  range: -2
  min: 0
  max: 100
  good: 50
  aliases:
    - "try"
  permission:
    name: "flectonepulse.module.command.try"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.try.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.try.sound"
      type: TRUE
```

## Options

- Messages are changed here [Try](/en/messages/ru_ru/module/command/command-try/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `min`
- Default `0`

Minimum chance of performing an action

### `max`
- Default `100`

Maximum chance of performing an action

### `good`
- Default `50`

The chance of performing an action from which it is considered to have been performed successfully

### `aliases`
- Default `try`

List of aliases for using the command

::: tip Aliases can be anything
For example `newtry`, `action`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.try`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.try.cooldown.ignore`
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
- Name `flectonepulse.module.command.try.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->