# Комманда /symbol
Путь `messages > ru_ru.yml > module.command.symbol`

## Пояснение
Сообщения для комманды `/symbol`
![command symbol](/commandsymbol.png)

## Редактирование
```yaml
<ru_ru.module.command.symbol>
```

### По умолчанию
```yaml
command-symbol:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SYMBOL</u> через <time>"
  categories:
    hands: "руки"
    arrows: "стрелки"
    numbers: "числа"
    transport: "транспорт"
    body: "тело"
    people: "люди"
    clothes: "одежда"
    food: "еда"
    symbols: "символы"
    environment: "окружение"
    greenery: "зелень"
    activities: "мероприятие"
    shapes: "фигуры"
    things: "вещи"
    animals: "животные"
    faces: "лицо"
    misc: "разное"
  format: "<click:suggest_command:\"<message>\"><fcolor:2>🖥 Нажми, чтобы использовать: <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Symbol](/ru/config/module/command/command-symbol/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SYMBOL</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `categories`
```yaml
hands: "руки"
arrows: "стрелки"
numbers: "числа"
transport: "транспорт"
body: "тело"
people: "люди"
clothes: "одежда"
food: "еда"
symbols: "символы"
environment: "окружение"
greenery: "зелень"
activities: "мероприятие"
shapes: "фигуры"
things: "вещи"
animals: "животные"
faces: "лицо"
misc: "разное"
```
Список категорий и их названий для подсказок

### `format`
- По умолчанию `<click:suggest_command:\"<message>\"><fcolor:2>🖥 Нажми, чтобы использовать: <fcolor:1><message>`

Формат сообщения, которое будет отправлено

