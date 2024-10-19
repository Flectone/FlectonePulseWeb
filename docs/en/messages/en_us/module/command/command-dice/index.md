# Command /dice
Path `messages > en_us.yml > module.command.dice`

## Explanation
Messages for `/dice` command
![command dice](/commanddice.png)

## Edit
```yaml
<en_us.module.command.dice>
```

### Default
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

## Options

- Configuration is here [Dice](/en/config/module/command/command-dice/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (number)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DICE</u> in <time>`

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
- Default `<fcolor:1>✎ <display_name> roll <message> (<sum>)`

Format of message

