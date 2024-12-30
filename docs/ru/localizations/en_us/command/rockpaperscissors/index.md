# Комманда /rockpaperscissors
Путь `localizations > en_us.yml > command.rockpaperscissors`

## Пояснение
Сообщения для комманды `/rockpaperscissors`
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<en_us.command.rockpaperscissors>
```

### По умолчанию
```yaml
rockpaperscissors:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This move is not possible"
  already: "<color:#ff7171><b>⁉</b> You've already made your move"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  sender: "<fcolor:1>Now goes <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors"
  format-move: "<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>"
  format-win: "<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>"
  format-draw: "<color:#98FB98>✂ It's a draw! You both chose <b><move>"
  strategies:
    paper: "paper"
    rock: "rock"
    scissors: "scissors"
```

## Параметры

- [Комманда](/ru/command/rockpaperscissors/)
- [Права](/ru/permission/command/rockpaperscissors/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-game`
- По умолчанию `<color:#ff7171><b>⁉</b> This game does not exist`

Сообщение, если игры не существует

### `wrong-move`
- По умолчанию `<color:#ff7171><b>⁉</b> This move is not possible`

Сообщение при невозможном ходе

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You've already made your move`

Сообщение, если игрок уже сделал ход

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't play with yourself`

Сообщение, если игрок решил поиграть с самим собой

### `sender`
- По умолчанию `<fcolor:1>Now goes <display_name>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors`

Сообщение для получателя

### `format-move`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>`

Сообщение при ходе

### `format-win`
- По умолчанию `<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>`

Сообщение при победе

### `forma-draw`
- По умолчанию `<color:#98FB98>✂ It's a draw! You both chose <b><move>`

Сообщение при ничье

### `strategies`
- По умолчанию:
```yaml
paper: "paper"
rock: "rock"
scissors: "scissors"
```

Список стратегий и их названий


