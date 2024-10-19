# Command /broadcast
Path `messages > ru_ru.yml > module.command.broadcast`

## Explanation
Messages for `/broadcast` command
![command broadcast](/commandbroadcast.png)

## Edit
```yaml
<ru_ru.module.command.broadcast>
```

### Default
```yaml
command-broadcast:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BROADCAST</u> через <time>"
  format: "<color:#ffd500>🕫 Сообщение для всех от <display_name> <br>❝ <message> ❠"
```

## Options

- Configuration is here [Broadcast](/en/config/module/command/command-broadcast/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BROADCAST</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<color:#ffd500>🕫 Сообщение для всех от <display_name> <br>❝ <message> ❠`

Format of message

