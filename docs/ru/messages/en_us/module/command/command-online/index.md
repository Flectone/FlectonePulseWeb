# Комманда /online
Путь `messages > en_us.yml > module.command.online`

## Пояснение
Сообщения для комманды `/online`
![command online](/commandonline.png)

## Редактирование
```yaml
<en_us.module.command.online>
```

### По умолчанию
```yaml
command-online:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (first/last/total) (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  current: "<fcolor:1>⌛ <display_name> currently on server"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ONLINE</u> in <time>"
  format-first: "<fcolor:1>⌛ <display_name> was first on server <time> ago"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>has spent a total of <time> on server"
```

## Параметры

- Конфигурация происходит тут [Online](/ru/config/module/command/command-online/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (first/last/total) (player)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `current`
- По умолчанию `<fcolor:1>⌛ <display_name> currently on server`

Сообщение, если введённый игрок на сервере

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ONLINE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format-first`
- По умолчанию `<fcolor:1>⌛ <display_name> was first on server <time> ago`

Формат сообщения `/online first`, которое будет отправлено

### `format-last`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago`

Формат сообщения `/online last`, которое будет отправлено

### `format-total`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>has spent a total of <time> on server`

Формат сообщения `/online total`, которое будет отправлено


