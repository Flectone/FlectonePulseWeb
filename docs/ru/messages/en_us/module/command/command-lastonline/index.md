# Комманда /lastonline
Путь `messages > en_us.yml > module.command.lastonline`

## Пояснение
Сообщения для комманды `/lastonline`
![command lastonline](/commandlastonline.png)

## Редактирование
```yaml
<en_us.module.command.lastonline>
```

### По умолчанию
```yaml
command-lastonline:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  current: "<fcolor:1>⌛ <display_name> currently on server"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>LASTONLINE</u> in <time>"
  format: "<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago"
```

## Параметры

- Конфигурация происходит тут [Lastonline](/ru/config/module/command/command-lastonline/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `current`
- По умолчанию `<fcolor:1>⌛ <display_name> currently on server`

Сообщение, если введённый игрок на сервере

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>LASTONLINE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago`

Формат сообщения, которое будет отправлено

