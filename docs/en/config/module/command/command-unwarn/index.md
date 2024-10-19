# Command /unwarn
Path `config.yml > module.command.command-unwarn`

## Explanation
Command to remove a warning from a player
![command unwarn](/commandunwarn.png)

## Edit
```yaml
<config.module.command.command-unwarn>
```

### Default
```yaml
command-unwarn:
  enable: true
  aliases:
    - "unwarn"
  permission:
    name: "flectonepulse.module.command.unwarn"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.unwarn.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.unwarn.sound"
      type: TRUE
```

## Options

- Messages are changed here [Unwarn](/en/messages/ru_ru/module/command/command-unwarn/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `unwarn`

List of aliases for using the command

::: tip Aliases can be anything
For example `newunwarn`, `unwarn`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.unwarn`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.unwarn.cooldown.ignore`
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
- Name `flectonepulse.module.command.unwarn.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::