# Комманда /broadcast
Путь `messages > ru_ru.yml > module.command.broadcast`

## Пояснение
Сообщения для комманды `/broadcast`
![command broadcast](/commandbroadcast.png)

## Редактирование
```yaml
<ru_ru.module.command.broadcast>
```

### По умолчанию
```yaml
command-broadcast:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BROADCAST</u> через <time>"
  format: "<color:#ffd500>🕫 Сообщение для всех от <display_name> <br>❝ <message> ❠"
```

## Параметры

- Конфигурация происходит тут [Broadcast](/ru/config/module/command/command-broadcast/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BROADCAST</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<color:#ffd500>🕫 Сообщение для всех от <display_name> <br>❝ <message> ❠`

Формат сообщения, которое будет отправлено

