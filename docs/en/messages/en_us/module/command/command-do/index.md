# Command /do
Path `messages > en_us.yml > module.command.do`

## Explanation
Messages for `/do` command
![command do](/commanddo.png)

## Edit
```yaml
<en_us.module.command.do>
```

### Default
```yaml
command-do:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DO</u> in <time>"
  format: "<fcolor:1>✎ <message> (<i><display_name></i>)"
```

## Options

- Configuration is here [Do](/en/config/module/command/command-do/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DO</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>✎ <message> (<i><display_name></i>)`

Format of message

