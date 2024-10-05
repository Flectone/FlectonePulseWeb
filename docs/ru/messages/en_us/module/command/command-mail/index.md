# Комманда /mail
Путь `messages > en_us.yml > module.command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<en_us.module.command.mail>
```

### По умолчанию
```yaml
command-mail:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAIL</u> in <time>"
  sender: "<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Mail](/ru/config/module/command/command-mail/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAIL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `sender`
- По умолчанию `<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>`

Сообщение для получателя

