# Комманда /tell
Путь `messages > ru_ru.yml > module.command.tell`

## Пояснение
Сообщения для комманды `/tell`
![command tell](/commandtell.png)

## Редактирование
```yaml
<ru_ru.module.command.tell>
```

### По умолчанию
```yaml
command-tell:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TELL</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Заметка] <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Tell](/ru/config/module/command/command-tell/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TELL</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>`

Сообщение для получателя

### `myself`
- По умолчанию `<fcolor:2>✉ [Заметка] <fcolor:1><message>`

Сообщение для отправителя, если он и есть получатель т.е. для себя


