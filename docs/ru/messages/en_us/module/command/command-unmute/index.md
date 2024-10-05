# Комманда /unmute
Путь `messages > en_us.yml > module.command.unmute`

## Пояснение
Сообщения для комманды `/unmute`
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<en_us.module.command.unmute>
```

### По умолчанию
```yaml
command-unmute:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNMUTE</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not muted"
  format: "<color:#98FB98>☻ Player <display_name> unmuted"
```

## Параметры

- Конфигурация происходит тут [Unmute](/ru/config/module/command/command-unmute/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNMUTE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> This player is not muted`

Сообщение, если введённый игрок не замучен

### `format`
- По умолчанию `<color:#98FB98>☻ Player <display_name> unmuted`

Сообщение при размуте
