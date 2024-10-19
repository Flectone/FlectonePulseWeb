# Command /try
Path `messages > ru_ru.yml > module.command.try`

## Explanation
Messages for `/try` command
![command try](/commandtry.png)

## Edit
```yaml
<ru_ru.module.command.try>
```

### Default
```yaml
command-try:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRY</u> через <time>"
  format-true: "<color:#98FB98>☺ <display_name> <message> <percent>%"
  format-false: "<color:#F08080>☹ <display_name> <message> <percent>%"
```

## Options

- Configuration is here [Try](/en/config/module/command/command-try/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRY</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format-true`
- Default `<color:#98FB98>☺ <display_name> <message> <percent>%`

Format of message if the action is successful

### `format-false`
- По умолчанию `<color:#F08080>☹ <display_name> <message> <percent>%`

Format of message if the action is unsuccessful


