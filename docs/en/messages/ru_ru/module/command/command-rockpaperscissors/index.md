# Command /rockpaperscissors
Path `messages > ru_ru.yml > module.command.rockpaperscissors`

## Explanation
Messages for `/rockpaperscissors` command
![command rockpaperscissors](/commandrockpaperscissors.png)

## Edit
```yaml
<ru_ru.module.command.rockpaperscissors>
```

### Default
```yaml
command-rockpaperscissors:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ROCKPAPERSCISSORS</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  already: "<color:#ff7171><b>⁉</b> Ты уже сходил"
  wrong-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  move: "<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>"
  sender: "<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага"
  win: "<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>"
  draw: "<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>"
  strategy:
    scissors: "ножницы"
    rock: "камень"
    paper: "бумага"
```

## Options

- Configuration is here [Rockpaperscissors](/en/config/module/command/command-rockpaperscissors/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ROCKPAPERSCISSORS</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if the entered player is not found

### `wrong-move`
- Default `<color:#ff7171><b>⁉</b> Такой ход невозможен`

Message an impossible move

### `already`
- Default `<color:#ff7171><b>⁉</b> Ты уже сходил`

Message if a player has already made a move

### `wrong-game`
- Default `<color:#ff7171><b>⁉</b> Этой игры не существует`

Message if game does not exist

### `myself`
- Default `<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой`

Message if a player decides to play with himself

### `move`
- Default `<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>`

Message on move

### `sender`
- Default `<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>`

Message to sender

### `receiver`
- Default `<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага`

Message to recipient

### `win`
- Default `<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>`

Winning message

### `draw`
- Default `<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>`

Message on a draw

### `strategy`
- Default:
```yaml
scissors: "ножницы"
rock: "камень"
paper: "бумага"
```

List of strategies and their names


