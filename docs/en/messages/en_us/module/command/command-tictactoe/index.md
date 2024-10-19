# Command /tictactoe
Path `messages > en_us.yml > module.command.tictactoe`

## Explanation
Messages for `/tictactoe` command
![command tictactoe](/commandtictactoe.png)

## Edit
```yaml
<en_us.module.command.tictactoe>
```

### Default
```yaml
command-tictactoe:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  wrong-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This step is not possible"
  wrong-by-player: "<color:#ff7171><b>⁉</b> This game ended because player quit"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TICTACTOE</u> in <time>"
  symbol:
    empty: "<hover:show_text:\"<fcolor:1>Move <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>"
    first: "<fcolor:2>☑</fcolor:2>"
    second: "<fcolor:2>☒</fcolor:2>"
  field:
    - "<fcolor:1>"
    - "|[#][#][#]| <title>"
    - "|[#][#][#]|"
    - "|[#][#][#]| <last_move>"
    - ""
  move: "<fcolor:2><player>'s move</fcolor:2>"
  last-move: "<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>"
  win: "<color:#98FB98><player> won this game</color:#98FB98>"
  draw: "<color:#98FB98>The game ended in a draw 👬</color:#98FB98>"
  sender: "<fcolor:1>☐ An offer to play was sent to <display_name>"
  receiver: "<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Received an invite to play tic-tac-toe with <display_name>, accept? [+]"
```

## Options

- Configuration is here [Tictactoe](/en/config/module/command/command-tictactoe/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `myself`
- Default `<color:#ff7171><b>⁉</b> You can't play with yourself`

Message if entered player tries to play with himself

### `wrong-game`
- Default `<color:#ff7171><b>⁉</b> This game does not exist`

Message if the specified game does not exist

### `wrong-move`
- Default `<color:#ff7171><b>⁉</b> This step is not possible`

Message if such a move is not possible

### `wrong-by-player`
- Default `<color:#ff7171><b>⁉</b> This game ended because player quit`

Message if one of the players participating in the game has left the game

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TICTACTOE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `symbol`

::: details Messages for symbols
#### `empty`
- Default `<hover:show_text:\"<fcolor:1>Move <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>`

Message format for an empty cell

#### `first`
- Default `<fcolor:2>☑</fcolor:2>`

Message format for the first player's cell

#### `second`
- Default `<fcolor:2>☒</fcolor:2>`

Message format for the second player's cell
:::

### `field`
- Default:
```yaml
- "<fcolor:1>"
- "|[#][#][#]| <title>"
- "|[#][#][#]|"
- "|[#][#][#]| <last_move>"
- ""
```

Message format for the playing field

### `move`
- Default `<fcolor:2><player>'s move</fcolor:2>`

Message format for progress notification

### `last-move`
- Default `<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>`

Message format for past move information

### `win`
- Default `<color:#98FB98><player> won this game</color:#98FB98>`

Winning message

### `draw`
- Default `<color:#98FB98>The game ended in a draw 👬</color:#98FB98>`

Message on a draw

### `sender`
- Default `<fcolor:1>☐ An offer to play was sent to <display_name>`

Message to sender when requesting

### `receiver`
- Default `<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Received an invite to play tic-tac-toe with <display_name>, accept? [+]`

Message to recipient when a request is made

