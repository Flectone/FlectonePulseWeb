# Комманда /clearmail
Путь `messages > ru_ru.yml > module.command.clearmail`

## Пояснение
Сообщения для комманды `/clearmail`
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<ru_ru.module.command.clearmail>
```

### По умолчанию
```yaml
command-clearmail:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (письмо)"
  null-mail: "<color:#ff7171><b>⁉</b> Письма не найдено"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARMAIL</u> через <time>"
  format: "<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Clearmail](/ru/config/module/command/command-clearmail/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (сообщение)`

Сообщение о том, как использовать комманду

### `null-mail`
- По умолчанию `<color:#ff7171><b>⁉</b> Письма не найдено`

Сообщение, если введённое письмо не найдено

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARMAIL</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>`

Формат сообщения, которое будет отправлено

