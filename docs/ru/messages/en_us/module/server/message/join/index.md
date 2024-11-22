# Подключение
Путь `messages > en_us.yml > module.server.message.join`

## Пояснение
Сообщения о том, что игрок подключился
![join](/join.png)

## Редактирование
```yaml
<en_us.module.server.message.join>
```

### По умолчанию
```yaml
join:
  format: "<color:#4eff52>→ <display_name>"
  format-first-time: "<color:#4eff52>→ <display_name> <fcolor:1>welcome!"
```

## Параметры

- [Конфиг](/ru/config/module/server/message/join/)
- [Права](/ru/permissions/module/server/message/join/)

### `format`
- По умолчанию `<color:#4eff52>→ <display_name>`

Сообщение при подключении на сервер

### `format-first-time`
- По умолчанию `<color:#4eff52>→ <display_name> <fcolor:1>welcome!`

Сообщение при первом подключении на сервер