# Command /rockpaperscissors
Path `config.yml > module.command.command-rockpaperscissors`

## Explanation
Command to propose a game of rock-paper-scissors
![command rockpaperscissors](/commandrockpaperscissors.png)

## Edit
```yaml
<config.module.command.command-rockpaperscissors>
```

### Default
```yaml
command-rockpaperscissors:
  enable: true
  aliases:
    - "rps"
    - "rockpaperscissors"
  permission:
    name: "flectonepulse.module.command.rockpaperscissors"
    type: TRUE
  strategy:
    scissors:
      - "paper"
    rock:
      - "scissors"
    paper:
      - "rock"
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.rockpaperscissors.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.rockpaperscissors.sound"
      type: TRUE
```

## Options

- Messages are changed here [Rockpaperscissors](/en/messages/ru_ru/module/command/command-rockpaperscissors/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default:
```yaml
- "rps"
- "rockpaperscissors"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newrps`, `knb`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.rockpaperscissors`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `strategy`

Strategies where the `key` is the one that defeats the `value`

::: tip For example, I want `scissors` to beat `paper`
So
```yaml
scissors:
  - "paper"
```

There can be more than one value
```yaml
scissors:
  - "paper"
  - "newitem"
```

You can make your own keys and values
```yaml
customvalue:
  - "customobject"
```
:::

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.rockpaperscissors.cooldown.ignore`
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
- Name `flectonepulse.module.command.rockpaperscissors.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::