# Command /broadcast
Path `config.yml > module.command.command-broadcast`

## Explanation
Command for global alert
![command broadcast](/commandbroadcast.png)

## Edit
```yaml
<config.module.command.command-broadcast>
```

### Default
```yaml
command-broadcast:
  enable: true
  range: -2
  aliases:
    - "broadcast"
    - "bc"
  permission:
    name: "flectonepulse.module.command.broadcast"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.broadcast.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.broadcast.sound"
      type: TRUE
```

## Options

- Messages are changed here [Ball](/en/messages/ru_ru/module/command/command-ball/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default:
```yaml
- "broadcast"
- "bc"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newbroadcast`, `global`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.broadcast`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.broadcast.cooldown.ignore`
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
- Name `flectonepulse.module.command.broadcast.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->