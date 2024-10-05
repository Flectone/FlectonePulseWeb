# Комманда /unban
Путь `messages > en_us.yml > module.command.unban`

## Пояснение
Сообщения для комманды `/unban`
![command unban](/commandunban.png)

## Редактирование
```yaml
<en_us.module.command.unban>
```

### По умолчанию
```yaml
command-unban:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNBAN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not banned"
  format: "<color:#98FB98>☻ Player <display_name> unbanned"
```

## Параметры

- Конфигурация происходит тут [Unban](/ru/config/module/command/command-unban/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNBAN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> This player is not banned`

Сообщение, если введённый игрок не заблокирован

### `format`
- По умолчанию `<color:#98FB98>☻ Player <display_name> unbanned`

Сообщение при разблокировке
