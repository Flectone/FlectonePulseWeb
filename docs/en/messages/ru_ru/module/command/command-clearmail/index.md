# Command /clearmail
Path `messages > ru_ru.yml > module.command.clearmail`

## Explanation
Messages for `/clearmail` command
![command clearmail](/commandclearmail.png)

## Edit
```yaml
<ru_ru.module.command.clearmail>
```

### Default
```yaml
command-clearmail:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (письмо)"
  null-mail: "<color:#ff7171><b>⁉</b> Письма не найдено"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARMAIL</u> через <time>"
  format: "<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>"
```

## Options

- Configuration is here [Clearmail](/en/config/module/command/command-clearmail/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Message on how to use the command

### `null-mail`
- Default `<color:#ff7171><b>⁉</b> Письма не найдено`

Message if entered mail is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARMAIL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>`

Format of message

