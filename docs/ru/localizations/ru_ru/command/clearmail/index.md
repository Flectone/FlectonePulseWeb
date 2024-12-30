# Комманда /clearmail
Путь `localizations > ru_ru.yml > command.clearmail`

## Пояснение
Сообщения для комманды `/clearmail`
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<ru_ru.command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  null-mail: "<color:#ff7171><b>⁉</b> Письма не найдено"
  format: "<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/command/clearmail/)
- [Права](/ru/permission/command/clearmail/)

### `null-mail`
- По умолчанию `<color:#ff7171><b>⁉</b> Письма не найдено`

Сообщение, если введённое письмо не найдено

### `format`
- По умолчанию `<fcolor:2>✉ [УДАЛЕНО] Письмо #<id> для <display_name> » <fcolor:1><message>`

Формат сообщения, которое будет отправлено

