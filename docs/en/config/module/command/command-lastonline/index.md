# Command /lastonline
Path `config.yml > module.command.command-lastonline`

## Explanation
A command to find out when a player was last on the server
![command lastonline](/commandlastonline.png)

## Edit
```yaml
<config.module.command.command-lastonline>
```

### Default
```yaml
command-lastonline:
  enable: true
  online-players: false
  aliases:
    - "lastonline"
  permission:
    name: "flectonepulse.module.command.lastonline"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.lastonline.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.lastonline.sound"
      type: TRUE
```

## Options

- Messages are changed here [Lastonline](/en/messages/ru_ru/module/command/command-lastonline/)

### `enable`
- Default `true`

Enables or disables module functionality

### `online-players`
- Default `false`

If enabled, it prompts the nicknames of players who are online, otherwise it prompts everyone who was on the server
::: tip This only affects the text prompt
If you enter the nickname of a player who is **not online** and `online-players: true`, the command will execute without error anyway
:::

### `aliases`
- Default `lastonline`

List of aliases for using the command

::: tip Aliases can be anything
For example `newlastonline`, `last time`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.lastonline`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.lastonline.cooldown.ignore`
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
- Name `flectonepulse.module.command.lastonline.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::