# Command /tictactoe
Path `config.yml > module.command.command-tictactoe`

## Explanation
A command to propose a game of tic-tac-toe
![command tictactoe](/commandtictactoe.png)

By default it throws a request to [Chinese tic-tac-toe](#rules-of-chinese-tic-tac-toe), if you want regular tic-tac-toe then use `/tictactoe nick false`
![command tictactoe default](/commandtictactoedefault.png)

## Edit
```yaml
<config.module.command.command-tictactoe>
```

### Default
```yaml
command-tictactoe:
  enable: true
  aliases:
    - "ttt"
    - "tictactoe"
  permission:
    name: "flectonepulse.module.command.tictactoe"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.tictactoe.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.tictactoe.sound"
      type: TRUE
```

## Options

- Messages are changed here [Tictactoe](/en/messages/ru_ru/module/command/command-tictactoe/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default:
```yaml
- "ttt"
- "tictactoe"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newtictactoe`, `crosses and tic-tac-toe`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.tictactoe`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.tictactoe.cooldown.ignore`
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
- Name `flectonepulse.module.command.tictactoe.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### Rules of Chinese tic-tac-toe.

1. Each player can only put `3` of his mark on the board
2. If the game is not over, the first mark that was placed by a player is removed and a new mark is placed
3. and so on in a circle until the game is over.

The game ends up being unpredictable, strategic and challenging!