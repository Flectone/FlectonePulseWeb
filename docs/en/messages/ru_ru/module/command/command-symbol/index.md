# Command /symbol
Path `messages > ru_ru.yml > module.command.symbol`

## Explanation
Messages for `/symbol` command
![command symbol](/commandsymbol.png)

## Edit
```yaml
<ru_ru.module.command.symbol>
```

### Default
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

## Options

- Configuration is here [Symbol](/en/config/module/command/command-symbol/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SYMBOL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

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
List of categories and their names for prompts

### `format`
- Default `<click:suggest_command:\"<message>\"><fcolor:2>🖥 Нажми, чтобы использовать: <fcolor:1><message>`

Format of message

