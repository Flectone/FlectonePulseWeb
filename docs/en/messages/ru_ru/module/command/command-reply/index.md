# Command /reply
Path `messages > ru_ru.yml > module.command.reply`

## Explanation
Messages for `/reply` command
![command reply](/commandreply.png)

## Edit
```yaml
<ru_ru.module.command.reply>
```

### Default
```yaml
command-reply:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>REPLY</u> через <time>"
  null-receiver: "<color:#ff7171><b>⁉</b> Некому отвечать"
```

## Options

- Configuration is here [Reply](/en/config/module/command/command-reply/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>REPLY</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-receiver`
- Default `<color:#ff7171><b>⁉</b> Некому отвечать`

Message if recipient is not found


