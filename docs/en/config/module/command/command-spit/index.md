# Command /spit
Path `config.yml > module.command.command-spit`

## Explanation
A command to create spit
![command spit](/commandspit.gif)

::: danger Attention
The command will not work if the [`Spit`](/en/config/module/interaction/spit/) module is disabled
:::

## Edit
```yaml
<config.module.command.command-spit>
```

### Default
```yaml
command-spit:
  enable: true
  aliases:
    - "spit"
  permission:
    name: "flectonepulse.module.command.spit"
    type: TRUE
  cooldown:
    enable: true
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.spit.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.spit.sound"
      type: TRUE
```

## Options

- Messages are changed here [Spit](/en/messages/ru_ru/module/command/command-spit/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `spit`

List of aliases for using the command

::: tip Aliases can be anything
For example `newspit`, `spit`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.spit`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.spit.cooldown.ignore`
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
- Name `flectonepulse.module.command.spit.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::