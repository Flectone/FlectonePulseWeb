# Комманда /reply
Путь `messages > en_us.yml > module.command.reply`

## Пояснение
Сообщения для комманды `/reply`
![command reply](/commandreply.png)

## Редактирование
```yaml
<en_us.module.command.reply>
```

### По умолчанию
```yaml
command-reply:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>REPLY</u> in <time>"
  null-receiver: "<color:#ff7171><b>⁉</b> No one to answer"
```

## Параметры

- Конфигурация происходит тут [Reply](/ru/config/module/command/command-reply/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>REPLY</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-receiver`
- По умолчанию `<color:#ff7171><b>⁉</b> No one to answer`

Сообщение, если получатель не найден


