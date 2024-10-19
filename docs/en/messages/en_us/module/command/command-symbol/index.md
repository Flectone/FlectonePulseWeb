# Command /symbol
Path `messages > en_us.yml > module.command.symbol`

## Explanation
Messages for `/symbol` command
![command symbol](/commandsymbol.png)

## Edit
```yaml
<en_us.module.command.symbol>
```

### Default
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

## Options

- Configuration is here [Symbol](/en/config/module/command/command-symbol/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SYMBOL</u> in <time>`

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
- Default `<click:suggest_command:\"<message>\"><fcolor:2>🖥 Click for using: <fcolor:1><message>`

Format of message

