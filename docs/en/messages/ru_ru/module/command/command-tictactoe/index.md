# Command /tictactoe
Path `messages > ru_ru.yml > module.command.tictactoe`

## Explanation
Messages for `/tictactoe` command
![command tictactoe](/commandtictactoe.png)

## Edit
```yaml
<ru_ru.module.command.tictactoe>
```

### Default
```yaml
command-tictactoe:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  wrong-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  wrong-by-player: "<color:#ff7171><b>⁉</b> Игра закончена, потому что один из игроков не в сети"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TICTACTOE</u> через <time>"
  symbol:
    empty: "<hover:show_text:\"<fcolor:1>Ход <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>"
    first: "<fcolor:2>☑</fcolor:2>"
    second: "<fcolor:2>☒</fcolor:2>"
  field:
    - "<fcolor:1>"
    - "|[#][#][#]| <title>"
    - "|[#][#][#]|"
    - "|[#][#][#]| <last_move>"
    - ""
  move: "<fcolor:2>Ход <player> </fcolor:2>"
  last-move: "<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>"
  win: "<color:#98FB98><player> выйграл</color:#98FB98>"
  draw: "<color:#98FB98>Ничья 👬</color:#98FB98>"
  sender: "<fcolor:1>☐ Предложение сыграть в крестики-нолики отправлено для <display_name>"
  receiver: "<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Есть предложение сыграть в крестики-нолики от <display_name>, принять? [+]"
```

## Options

- Configuration is here [Tictactoe](/en/config/module/command/command-tictactoe/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `myself`
- Default `<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой`

Message if entered player tries to play with himself

### `wrong-game`
- Default `<color:#ff7171><b>⁉</b> Этой игры не существует`

Message if the specified game does not exist

### `wrong-move`
- Default <color:#ff7171><b>⁉</b> Такой ход невозможен`

Message if such a move is not possible

### `wrong-by-player`
- Default `<color:#ff7171><b>⁉</b> Игра закончена, потому что один из игроков не в сети`

Message if one of the players participating in the game has left the game

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TICTACTOE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `symbol`

::: details Messages for symbols
#### `empty`
- Default `<hover:show_text:\"<fcolor:1>Ход <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>`

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
- Default `<fcolor:2>Ход <player> </fcolor:2>`

Message format for progress notification

### `last-move`
- Default `<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>`

Message format for past move information

### `win`
- Default `<color:#98FB98><player> выйграл</color:#98FB98>`

Winning message

### `draw`
- Default `<color:#98FB98>Ничья 👬</color:#98FB98>`

Message on a draw

### `sender`
- Default <fcolor:1>☐ Предложение сыграть в крестики-нолики отправлено для <display_name>`

Message to sender when requesting

### `receiver`
- Default `<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Есть предложение сыграть в крестики-нолики от <display_name>, принять? [+]`

Message to recipient when a request is made

