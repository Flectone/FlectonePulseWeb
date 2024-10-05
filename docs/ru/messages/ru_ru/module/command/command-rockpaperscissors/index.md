# Комманда /rockpaperscissors
Путь `messages > ru_ru.yml > module.command.rockpaperscissors`

## Пояснение
Сообщения для комманды `/rockpaperscissors`
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<ru_ru.module.command.rockpaperscissors>
```

### По умолчанию
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

## Параметры

- Конфигурация происходит тут [Rockpaperscissors](/ru/config/module/command/command-rockpaperscissors/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ROCKPAPERSCISSORS</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `wrong-move`
- По умолчанию `<color:#ff7171><b>⁉</b> Такой ход невозможен`

Сообщение при невозможном ходе

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты уже сходил`

Сообщение, если игрок уже сделал ход

### `wrong-game`
- По умолчанию `<color:#ff7171><b>⁉</b> Этой игры не существует`

Сообщение, если игры не существует

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой`

Сообщение, если игрок решил поиграть с самим собой

### `move`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>`

Сообщение при ходе

### `sender`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага`

Сообщение для получателя

### `win`
- По умолчанию `<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>`

Сообщение при победе

### `draw`
- По умолчанию `<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>`

Сообщение при ничье

### `strategy`
- По умолчанию:
```yaml
scissors: "ножницы"
rock: "камень"
paper: "бумага"
```

Список стратегий и их названий


