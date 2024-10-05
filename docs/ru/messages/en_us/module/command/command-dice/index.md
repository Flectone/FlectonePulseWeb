# Комманда /dice
Путь `messages > en_us.yml > module.command.dice`

## Пояснение
Сообщения для комманды `/dice`
![command dice](/commanddice.png)

## Редактирование
```yaml
<en_us.module.command.dice>
```

### По умолчанию
```yaml
command-dice:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (number)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DICE</u> in <time>"
  symbols:
    1: "⚀"
    2: "⚁"
    3: "⚂"
    4: "⚃"
    5: "⚄"
    6: "⚅"
  format: "<fcolor:1>✎ <display_name> roll <message> (<sum>)"
```

## Параметры

- Конфигурация происходит тут [Dice](/ru/config/module/command/command-dice/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (number)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DICE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `symbols`
- По умолчанию:
```yaml
1: "⚀"
2: "⚁"
3: "⚂"
4: "⚃"
5: "⚄"
6: "⚅"
```

Список индексов (выпавшее число) и символов (кубики)

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> roll <message> (<sum>)`

Формат сообщения, которое будет отправлено

