# Комманда /unwarn
Путь `messages > en_us.yml > module.command.unwarn`

## Пояснение
Сообщения для комманды `/unwarn`
![command unwarn](/commandunwarn.png)

## Редактирование
```yaml
<en_us.module.command.unwarn>
```

### По умолчанию
```yaml
command-unwarn:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNWARN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not warned"
  format: "<color:#98FB98>☻ Player <display_name> unwarned"
```

## Параметры

- Конфигурация происходит тут [Unwarn](/ru/config/module/command/command-unwarn/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNWARN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> This player is not warned`

Сообщение, если введённый игрок не имеет предупреждения

### `format`
- По умолчанию `<color:#98FB98>☻ Player <display_name> unwarned`

Сообщение при снятии предупреждения
