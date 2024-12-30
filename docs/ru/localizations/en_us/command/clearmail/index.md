# Комманда /clearmail
Путь `localizations > en_us.yml > command.clearmail`

## Пояснение
Сообщения для комманды `/clearmail`
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<en_us.command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  null-mail: "<color:#ff7171><b>⁉</b> This mail does not exist"
  format: "<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/command/clearmail/)
- [Права](/ru/permission/command/clearmail/)

### `null-mail`
- По умолчанию `<color:#ff7171><b>⁉</b> This mail does not exist`

Сообщение, если введённое письмо не найдено

### `format`
- По умолчанию `<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>`

Формат сообщения, которое будет отправлено

