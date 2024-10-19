# Command /helper
Path `config.yml > module.command.command-helper`

## Explanation
The command to ask for help
![command helper](/commandhelper.png)

On behalf of helper
![command helper player](/commandhelperadmin.png)

## Edit
```yaml
<config.module.command.command-helper>
```

### Default
```yaml
command-helper:
  enable: true
  range: -2
  aliases:
    - "helper"
  permission:
    name: "flectonepulse.module.command.helper"
    type: TRUE
  permission-see:
    name: "flectonepulse.module.command.helper.see"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.helper.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.helper.sound"
      type: TRUE
```

## Options

- Messages are changed here [Helper](/en/messages/ru_ru/module/command/command-helper/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `helper`

List of aliases for using the command

::: tip Aliases can be anything
For example `newhelper`, `help`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.helper`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `permission-see`
- Name `flectonepulse.module.command.helper.see`
- Type `OP`

[Permission](/en/config/module/#explanation) to see help requests

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.helper.cooldown.ignore`
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
- Name `flectonepulse.module.command.helper.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->