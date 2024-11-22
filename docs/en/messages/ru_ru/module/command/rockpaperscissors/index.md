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
rockpaperscissors:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  already: "<color:#ff7171><b>⁉</b> Ты уже сходил"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  sender: "<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага"
  format-move: "<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>"
  format-win: "<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>"
  format-draw: "<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>"
  strategies:
    paper: "бумага"
    scissors: "ножницы"
    rock: "камень"
```

## Параметры

- [Комманда](/en/commands/module/command/rockpaperscissors/)
- [Права](/en/permissions/module/command/rockpaperscissors/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `null-game`
- По умолчанию `<color:#ff7171><b>⁉</b> Этой игры не существует`

Сообщение, если игры не существует

### `wrong-move`
- По умолчанию `<color:#ff7171><b>⁉</b> Такой ход невозможен`

Сообщение при невозможном ходе

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты уже сходил`

Сообщение, если игрок уже сделал ход

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой`

Сообщение, если игрок решил поиграть с самим собой

### `sender`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага`

Сообщение для получателя

### `format-move`
- По умолчанию `<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>`

Сообщение при ходе

### `format-win`
- По умолчанию `<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>`

Сообщение при победе

### `forma-draw`
- По умолчанию `<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>`

Сообщение при ничье

### `strategies`
- По умолчанию:
```yaml
paper: "бумага"
scissors: "ножницы"
rock: "камень"
```

Список стратегий и их названий


