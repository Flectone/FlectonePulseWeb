# Command /unban
Path `config.yml > module.command.command-unban`

## Explanation
Command to pardon a player
![command unban](/commandunban.png)

## Edit
```yaml
<config.module.command.command-unban>
```

### Default
```yaml
command-unban:
  enable: true
  aliases:
    - "pardon"
    - "unban"
  permission:
    name: "flectonepulse.module.command.unban"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.unban.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.unban.sound"
      type: TRUE
```

## Options

- Messages are changed here [Unban](/en/messages/ru_ru/module/command/command-unban/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default:
```yaml
- "pardon"
- "unban"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newunban`, `unblock`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.unban`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.unban.cooldown.ignore`
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
- Name `flectonepulse.module.command.unban.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::