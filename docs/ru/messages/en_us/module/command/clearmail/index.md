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
clearmail:
  null-mail: "<color:#ff7171><b>⁉</b> This mail does not exist"
  format: "<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/commands/module/command/clearmail/)
- [Права](/ru/permissions/module/command/clearmail/)

### `null-mail`
- По умолчанию `<color:#ff7171><b>⁉</b> This mail does not exist`

Сообщение, если введённое письмо не найдено

### `format`
- По умолчанию `<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>`

Формат сообщения, которое будет отправлено

