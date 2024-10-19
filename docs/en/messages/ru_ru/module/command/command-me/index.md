# Command /me
Path `messages > ru_ru.yml > module.command.me`

## Explanation
Messages for `/me` command
![command me](/commandme.png)

## Edit
```yaml
<ru_ru.module.command.me>
```

### Default
```yaml
command-me:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ME</u> через <time>"
  format: "<fcolor:1>✎ <display_name> <message>"
```

## Options

- Configuration is here [Me](/en/config/module/command/command-me/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ME</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>✎ <display_name> <message>`

Format of message
![command me](/commandme.png)



