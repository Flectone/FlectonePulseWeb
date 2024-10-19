# Command /tell
Path `messages > ru_ru.yml > module.command.tell`

## Explanation
Messages for `/tell` command
![command tell](/commandtell.png)

## Edit
```yaml
<ru_ru.module.command.tell>
```

### Default
```yaml
command-tell:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TELL</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Заметка] <fcolor:1><message>"
```

## Options

- Configuration is here [Tell](/en/config/module/command/command-tell/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TELL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `sender`
- Default `<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>`

Message to sender

### `receiver`
- Default `<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>`

Message to recipient

### `myself`
- Default `<fcolor:2>✉ [Заметка] <fcolor:1><message>`

Message is for sender, if he is recipient, i.e. for himself


