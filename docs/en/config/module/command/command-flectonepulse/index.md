# Command /flectonepulse
Path `config.yml > module.command.command-flectonepulse`

## Explanation
Main command of the `FlectonePulse` plugin
![command flectonepulse](/commandflectonepulse.png)


## Edit
```yaml
<config.module.command.command-flectonepulse>
```

### Default
```yaml
command-flectonepulse:
  enable: true
  aliases:
    - "fp"
    - "flectonepulse"
  permission:
    name: "flectonepulse.module.command.flectonepulse"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.flectonepulse.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.flectonepulse.sound"
      type: TRUE
```

## Options

- Messages are changed here [Flectonepulse](/ru/messages/ru_ru/module/command/command-flectonepulse/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- По умолчанию:
```yaml
- "fp"
- "flectonepulse"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newflectonepulse`, `flectonepulse`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.flectonepulse`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.flectonepulse.cooldown.ignore`
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
- Name `flectonepulse.module.command.flectonepulse.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::