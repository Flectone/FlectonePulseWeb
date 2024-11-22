# Отключение
Путь `messages > en_us.yml > module.server.message.quit`

## Пояснение
Сообщения о том, что игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<en_us.module.server.message.quit>
```

### По умолчанию
```yaml
quit:
  format: "<color:#ff4e4e>← <display_name>"
  format-first-time: "<color:#ff4e4e>← <display_name> <fcolor:1>goodbye"
```

## Параметры

- [Конфиг](/ru/config/module/server/message/quit/)
- [Права](/ru/permissions/module/server/message/quit/)

### `format`
- По умолчанию `<color:#ff4e4e>← <display_name>`

Сообщение при отключении с сервера

### `format-first-time`
- По умолчанию `<color:#ff4e4e>← <display_name> <fcolor:1>goodbye`

Сообщение при первом отключении с сервера   