# Комманда /rockpaperscissors
Путь `messages > en_us.yml > module.command.rockpaperscissors`

## Пояснение
Сообщения для комманды `/rockpaperscissors`
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<en_us.module.command.rockpaperscissors>
```

### По умолчанию
```yaml
command-rockpaperscissors:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ROCKPAPERSCISSORS</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This move is not possible"
  already: "<color:#ff7171><b>⁉</b> You've already made your move"
  wrong-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  move: "<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>"
  sender: "<fcolor:1>Now goes <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors"
  win: "<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>"
  draw: "<color:#98FB98>✂ It's a draw! You both chose <b><move>"
  strategy:
    scissors: "scissors"
    rock: "rock"
    paper: "paper"
```

## Параметры

- Конфигурация происходит тут [Rockpaperscissors](/ru/config/module/command/command-rockpaperscissors/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ROCKPAPERSCISSORS</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `wrong-move`
- По умолчанию `<color:#ff7171><b>⁉</b> This move is not possible`

Сообщение при невозможном ходе

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You've already made your move`

Сообщение, если игрок уже сделал ход

### `wrong-game`
- По умолчанию `<color:#ff7171><b>⁉</b> This game does not exist`

Сообщение, если игры не существует

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't play with yourself`

Сообщение, если игрок решил поиграть с самим собой

### `move`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>`

Сообщение при ходе

### `sender`
- По умолчанию `<fcolor:1>Now goes <display_name>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors`

Сообщение для получателя

### `win`
- По умолчанию `<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>`

Сообщение при победе

### `draw`
- По умолчанию `<color:#98FB98>✂ It's a draw! You both chose <b><move>`

Сообщение при ничье

### `strategy`
- По умолчанию:
```yaml
scissors: "scissors"
rock: "rock"
paper: "paper"
```

Список стратегий и их названий


