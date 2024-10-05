# Комманда /clearmail
Путь `messages > en_us.yml > module.command.clearmail`

## Пояснение
Сообщения для комманды `/clearmail`
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<en_us.module.command.clearmail>
```

### По умолчанию
```yaml
command-clearmail:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (mail)"
  null-mail: "<color:#ff7171><b>⁉</b> This mail does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARMAIL</u> in <time>"
  format: "<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>"
```

## Параметры

- Конфигурация происходит тут [Clearmail](/ru/config/module/command/command-clearmail/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (mail)`

Сообщение о том, как использовать комманду

### `null-mail`
- По умолчанию `<color:#ff7171><b>⁉</b> This mail does not exist`

Сообщение, если введённое письмо не найдено

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARMAIL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>`

Формат сообщения, которое будет отправлено

