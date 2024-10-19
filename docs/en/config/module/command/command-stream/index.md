# Command /stream
Path `config.yml > module.command.command-stream`

## Explanation
Command to notify about stream launch
![command stream](/commandstream.png)

If the stream is enabled, the player is given a prefix
![command stream prefix](/commandstreamprefix.png)

## Edit
```yaml
<config.module.command.command-stream>
```

### Default
```yaml
command-stream:
  enable: true
  range: -2
  aliases:
    - "stream"
  permission:
    name: "flectonepulse.module.command.stream"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.stream.cooldown.ignore"
      type: OP
  sound:
    enable: true
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.stream.sound"
      type: TRUE
```

## Options

- Messages are changed here [Stream](/en/messages/ru_ru/module/command/command-stream/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `stream`

List of aliases for using the command

::: tip Aliases can be anything
For example `newstream`, `stream`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.stream`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.stream.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`
- Default `true`

Turns on sound playback when using

::: details Sound setting
#### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and tone (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.command.stream.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->