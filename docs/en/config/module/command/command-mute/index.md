# Command /mute
Path `config.yml > module.command.command-mute`

## Explanation
The command to mute a player
![command mute](/commandmute.png)

## Edit
```yaml
<config.module.command.command-mute>
```

### Default
```yaml
command-mute:
  enable: true
  online-players: false
  range: -2
  aliases:
    - "mute"
  permission:
    name: "flectonepulse.module.command.mute"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.mute.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mute.sound"
      type: TRUE
```

## Options

- Messages are changed here [Mute](/en/messages/ru_ru/module/command/command-mute/)

### `enable`
- Default `true`

Enables or disables module functionality

### `online-players`
- По умолчанию `false`

If enabled, it prompts the nicknames of players who are online, otherwise it prompts everyone who was on the server
::: tip This only affects the text prompt
If you enter the nickname of a player who is **not online** and `online-players: true`, the command will execute without error anyway
:::

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `mute`

List of aliases for using the command

::: tip Aliases can be anything
For example `newmute`, `mute`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.mute`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.mute.cooldown.ignore`
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
- Name `flectonepulse.module.command.mute.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->