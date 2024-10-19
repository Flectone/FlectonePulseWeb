# Command /mark
Path `config.yml > module.command.command-mark`

## Explanation
Command for creating marks
![command mark](/commandmark.gif)

::: danger Caution
The command will not work if the [`Mark`](/en/config/module/interaction/mark/) module is disabled
:::

## Edit
```yaml
<config.module.command.command-mark>
```

### Default
```yaml
command-mark:
  enable: true
  aliases:
    - "mark"
  permission:
    name: "flectonepulse.module.command.mark"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.mark.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mark.sound"
      type: TRUE
```

## Options

- Messages are changed here [Mark](/en/messages/ru_ru/module/command/command-mark/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `mark`

List of aliases for using the command

::: tip Aliases can be anything
For example `newmark`, `mark`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.mark`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.mark.cooldown.ignore`
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
- Name `flectonepulse.module.command.mark.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::