# Комманда /tell
Путь `messages > en_us.yml > module.command.tell`

## Пояснение
Сообщения для комманды `/tell`
![command tell](/commandtell.png)

## Редактирование
```yaml
<en_us.module.command.tell>
```

### По умолчанию
```yaml
command-tell:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TELL</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  sender: "<fcolor:2>✉ You → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → You » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Note] <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Tell](/ru/config/module/command/command-tell/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TELL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ You → <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ <display_name> → You » <fcolor:1><message>`

Сообщение для получателя

### `myself`
- По умолчанию `<fcolor:2>✉ [Note] <fcolor:1><message>`

Сообщение для отправителя, если он и есть получатель т.е. для себя


