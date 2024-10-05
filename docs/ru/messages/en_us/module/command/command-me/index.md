# Комманда /me
Путь `messages > en_us.yml > module.command.me`

## Пояснение
Сообщения для комманды `/me`
![command me](/commandme.png)

## Редактирование
```yaml
<en_us.module.command.me>
```

### По умолчанию
```yaml
command-me:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ME</u> in <time>"
  format: "<fcolor:1>✎ <display_name> <message>"
```

## Параметры

- Конфигурация происходит тут [Me](/ru/config/module/command/command-me/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ME</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> <message>`

Формат сообщения, которое будет отправлено
![command me](/commandme.png)



