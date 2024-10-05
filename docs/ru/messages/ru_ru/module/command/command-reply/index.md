# Комманда /reply
Путь `messages > ru_ru.yml > module.command.reply`

## Пояснение
Сообщения для комманды `/reply`
![command reply](/commandreply.png)

## Редактирование
```yaml
<ru_ru.module.command.reply>
```

### По умолчанию
```yaml
command-reply:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>REPLY</u> через <time>"
  null-receiver: "<color:#ff7171><b>⁉</b> Некому отвечать"
```

## Параметры

- Конфигурация происходит тут [Reply](/ru/config/module/command/command-reply/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>REPLY</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-receiver`
- По умолчанию `<color:#ff7171><b>⁉</b> Некому отвечать`

Сообщение, если получатель не найден


