# Command /dice
Path `messages > ru_ru.yml > module.command.dice`

## Explanation
Messages for `/dice` command
![command dice](/commanddice.png)

## Edit
```yaml
<ru_ru.module.command.dice>
```

### Default
```yaml
command-dice:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (число)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DICE</u> через <time>"
  symbols:
    1: "⚀"
    2: "⚁"
    3: "⚂"
    4: "⚃"
    5: "⚄"
    6: "⚅"
  format: "<fcolor:1>✎ <display_name> кинул кубики <message> (<sum>)"
```

## Options

- Configuration is here [Dice](/en/config/module/command/command-dice/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (число)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DICE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `symbols`
- Default:
```yaml
1: "⚀"
2: "⚁"
3: "⚂"
4: "⚃"
5: "⚄"
6: "⚅"
```

List of indexes (rolled number) and symbols (dice)

### `format`
- Default `<fcolor:1>✎ <display_name> кинул кубики <message> (<sum>)`

Format of message

