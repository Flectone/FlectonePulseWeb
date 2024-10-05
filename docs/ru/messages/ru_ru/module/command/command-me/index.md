# Комманда /me
Путь `messages > ru_ru.yml > module.command.me`

## Пояснение
Сообщения для комманды `/me`
![command me](/commandme.png)

## Редактирование
```yaml
<ru_ru.module.command.me>
```

### По умолчанию
```yaml
command-me:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ME</u> через <time>"
  format: "<fcolor:1>✎ <display_name> <message>"
```

## Параметры

- Конфигурация происходит тут [Me](/ru/config/module/command/command-me/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ME</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> <message>`

Формат сообщения, которое будет отправлено
![command me](/commandme.png)



