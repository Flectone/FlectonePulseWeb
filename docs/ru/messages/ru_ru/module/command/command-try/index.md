# Комманда /try
Путь `messages > ru_ru.yml > module.command.try`

## Пояснение
Сообщения для комманды `/try`
![command try](/commandtry.png)

## Редактирование
```yaml
<ru_ru.module.command.try>
```

### По умолчанию
```yaml
command-try:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRY</u> через <time>"
  format-true: "<color:#98FB98>☺ <display_name> <message> <percent>%"
  format-false: "<color:#F08080>☹ <display_name> <message> <percent>%"
```

## Параметры

- Конфигурация происходит тут [Try](/ru/config/module/command/command-try/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRY</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format-true`
- По умолчанию `<color:#98FB98>☺ <display_name> <message> <percent>%`

Формат сообщения, которое будет отправлено, если действие выполнено успешно

### `format-false`
- По умолчанию `<color:#F08080>☹ <display_name> <message> <percent>%`

Формат сообщения, которое будет отправлено, если действие выполнено неуспешно


