# Command /ignore
Path `config.yml > module.command.command-ignore`

## Explanation
Command to ignore all messages from a player
![command ignore](/commandignore.png)

Removes ignore with reuse
![command unignore](/commandunignore.png)

## Edit
```yaml
<config.module.command.command-ignore>
```

### Default
```yaml
command-ignore:
  enable: true
  online-players: false
  aliases:
    - "ignore"
  permission:
    name: "flectonepulse.module.command.ignore"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.ignore.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.ignore.sound"
      type: TRUE
```

## Options

- Messages are changed here [Ignore](/en/messages/ru_ru/module/command/command-ignore/)

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
- Default `ignore`

List of aliases for using the command

::: tip Aliases can be anything
For example `newignore`, `ignore`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.ignore`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.ignore.sound`
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
- Name `flectonepulse.module.command.ignore.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::