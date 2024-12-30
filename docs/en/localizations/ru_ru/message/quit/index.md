# Отключение
Путь `localizations > ru_ru.yml > message.quit`

## Пояснение
Сообщения о том, что игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<ru_ru.message.quit>
```

### По умолчанию
```yaml
quit:
  format: "<color:#ff4e4e>← <display_name>"
  format-first-time: "<color:#ff4e4e>← <display_name> <fcolor:1>впервые вышел!"
```

## Параметры

- [Сообщения](/ru/message/quit/)
- [Права](/ru/permission/message/quit/)

### `format`
- По умолчанию `<color:#ff4e4e>← <display_name>`

Сообщение при отключении с сервера

### `format-first-time`
- По умолчанию `<color:#ff4e4e>← <display_name> <fcolor:1>впервые вышел!`

Сообщение при первом отключении с сервера   