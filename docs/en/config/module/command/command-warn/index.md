# Command /warn
Path `config.yml > module.command.command-warn`

## Explanation
Command to give a warning to a player
![command warn](/commandwarn.png)

## Edit
```yaml
<config.module.command.command-warn>
```

### Default
```yaml
command-warn:
  enable: true
  online-players: false
  range: -2
  aliases:
    - "warn"
  actions:
    5: "ban <target>"
    3: "ban <target> 1h"
    2: "mute <target> 1h"
  permission:
    name: "flectonepulse.module.command.warn"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.warn.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.warn.sound"
      type: TRUE
```

## Options

- Messages are changed here [Warn](/en/messages/ru_ru/module/command/command-warn/)

### `enable`
- Default `true`

Enables or disables module functionality

### `online-players`
- Default `false`

If enabled, it prompts the nicknames of players who are online, otherwise it prompts everyone who was on the server
::: tip This only affects the text prompt
If you enter the nickname of a player who is **not online** and `online-players: true`, the command will execute without error anyway
:::

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `warn`

List of aliases for using the command

::: tip Aliases can be anything
For example `newwarn`, `warn`, etc.
:::

### `actions`
- Default:
```yaml
5: "ban <target>"
3: "ban <target> 1h"
2: "mute <target> 1h"
```

A list where the key is the `number` of warnings and the value is the `action` to be performed

::: tip For example, I want to ban a player for `10` warns
Then I should write `10: ban <target> ohh`. The action will be executed if the player has `10` active warnings.
:::

### `permission`
- Name `flectonepulse.module.command.warn`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.warn.cooldown.ignore`
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
- Name `flectonepulse.module.command.warn.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->