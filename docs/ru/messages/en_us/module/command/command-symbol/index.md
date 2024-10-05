# Комманда /symbol
Путь `messages > en_us.yml > module.command.symbol`

## Пояснение
Сообщения для комманды `/symbol`
![command symbol](/commandsymbol.png)

## Редактирование
```yaml
<en_us.module.command.symbol>
```

### По умолчанию
```yaml
command-symbol:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SYMBOL</u> in <time>"
  categories:
    hands: "hands"
    arrows: "arrows"
    numbers: "numbers"
    transport: "transport"
    body: "body"
    people: "people"
    clothes: "clothes"
    food: "food"
    symbols: "symbols"
    environment: "environment"
    greenery: "greenery"
    activities: "activities"
    shapes: "shapes"
    things: "things"
    animals: "animals"
    faces: "faces"
    misc: "misc"
  format: "<click:suggest_command:\"<message>\"><fcolor:2>🖥 Click for using: <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Symbol](/ru/config/module/command/command-symbol/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SYMBOL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `categories`
```yaml
hands: "hands"
arrows: "arrows"
numbers: "numbers"
transport: "transport"
body: "body"
people: "people"
clothes: "clothes"
food: "food"
symbols: "symbols"
environment: "environment"
greenery: "greenery"
activities: "activities"
shapes: "shapes"
things: "things"
animals: "animals"
faces: "faces"
misc: "misc"
```
Список категорий и их названий для подсказок

### `format`
- По умолчанию `<click:suggest_command:\"<message>\"><fcolor:2>🖥 Click for using: <fcolor:1><message>`

Формат сообщения, которое будет отправлено

