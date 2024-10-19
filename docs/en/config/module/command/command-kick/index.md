# Command /kick
Path `config.yml > module.command.command-kick`

## Explanation
Command for kicking a player from the server
![command kick](/commandkick.png)

On behalf of the player
![command kick player](/commandkickplayer.png)

## Edit
```yaml
<config.module.command.command-kick>
```

### Default
```yaml
command-kick:
  enable: true
  range: -2
  aliases:
    - "kick"
  permission:
    name: "flectonepulse.module.command.kick"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.kick.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.kick.sound"
      type: TRUE
```

## Options

- Messages are changed here [Kick](/en/messages/ru_ru/module/command/command-kick/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `kick`

List of aliases for using the command

::: tip Aliases can be anything
For example `newkick`, `exclude`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.kick`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.kick.cooldown.ignore`
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
- Name `flectonepulse.module.command.kick.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->