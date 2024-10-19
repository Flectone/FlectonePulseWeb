# Command /mail
Path `messages > ru_ru.yml > module.command.mail`

## Explanation
Messages for `/mail` command
![command mail](/commandmail.png)

## Edit
```yaml
<ru_ru.module.command.mail>
```

### Default
```yaml
command-mail:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAIL</u> через <time>"
  sender: "<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>"
```

## Options

- Configuration is here [Mail](/en/config/module/command/command-mail/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAIL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `sender`
- Default `<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>`

Message to sender

### `receiver`
- Default `<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>`

Message to receiver

