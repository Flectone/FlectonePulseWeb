# Комманда /try
Путь `messages > en_us.yml > module.command.try`

## Пояснение
Сообщения для комманды `/try`
![command try](/commandtry.png)

## Редактирование
```yaml
<en_us.module.command.try>
```

### По умолчанию
```yaml
command-try:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRY</u> in <time>"
  format-true: "<color:#98FB98>☺ <display_name> <message> <percent>%"
  format-false: "<color:#F08080>☹ <display_name> <message> <percent>%"
```

## Параметры

- Конфигурация происходит тут [Try](/ru/config/module/command/command-try/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRY</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format-true`
- По умолчанию `<color:#98FB98>☺ <display_name> <message> <percent>%`

Формат сообщения, которое будет отправлено, если действие выполнено успешно

### `format-false`
- По умолчанию `<color:#F08080>☹ <display_name> <message> <percent>%`

Формат сообщения, которое будет отправлено, если действие выполнено неуспешно


