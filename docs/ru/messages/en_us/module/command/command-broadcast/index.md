# Комманда /broadcast
Путь `messages > en_us.yml > module.command.broadcast`

## Пояснение
Сообщения для комманды `/broadcast`
![command broadcast](/commandbroadcast.png)

## Редактирование
```yaml
<en_us.module.command.broadcast>
```

### По умолчанию
```yaml
command-broadcast:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BROADCAST</u> in <time>"
  format: "<color:#fce303>🕫 Message for all from <display_name> <br>❝ <message> ❠"
```

## Параметры

- Конфигурация происходит тут [Broadcast](/ru/config/module/command/command-broadcast/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BROADCAST</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<color:#fce303>🕫 Message for all from <display_name> <br>❝ <message> ❠`

Формат сообщения, которое будет отправлено

