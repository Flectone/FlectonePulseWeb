# Command /do
Path `messages > ru_ru.yml > module.command.do`

## Explanation
Messages for `/do` command
![command do](/commanddo.png)

## Edit
```yaml
<ru_ru.module.command.do>
```

### Default
```yaml
command-do:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DO</u> через <time>"
  format: "<fcolor:1>✎ <message> (<i><display_name></i>)"
```

## Options

- Configuration is here [Do](/en/config/module/command/command-do/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DO</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>✎ <message> (<i><display_name></i>)`

Format of message

