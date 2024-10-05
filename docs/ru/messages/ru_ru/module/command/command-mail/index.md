# Комманда /mail
Путь `messages > ru_ru.yml > module.command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<ru_ru.module.command.mail>
```

### По умолчанию
```yaml
command-mail:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAIL</u> через <time>"
  sender: "<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Mail](/ru/config/module/command/command-mail/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAIL</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `sender`
- По умолчанию `<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>`

Сообщение для получателя

