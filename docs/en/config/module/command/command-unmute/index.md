# Command /unmute
Path `config.yml > module.command.command-unmute`

## Explanation
Command to unmute a player
![command unmute](/commandunmute.png)

## Edit
```yaml
<config.module.command.command-unmute>
```

### Options
```yaml
command-unmute:
  enable: true
  aliases:
    - "unmute"
  permission:
    name: "flectonepulse.module.command.unmute"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.unmute.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.unmute.sound"
      type: TRUE
```

## Options

- Messages are changed here [Unmute](/en/messages/ru_ru/module/command/command-unmute/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `unmute`

List of aliases for using the command

::: tip Aliases can be anything
For example `newunmute`, `unmute`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.unmute`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.unmute.cooldown.ignore`
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
- Name `flectonepulse.module.command.unmute.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::