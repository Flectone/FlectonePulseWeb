# Подключение
Путь `messages > ru_ru.yml > module.server.message.join`

## Пояснение
Сообщения о том, что игрок подключился
![join](/join.png)

## Редактирование
```yaml
<ru_ru.module.server.message.join>
```

### По умолчанию
```yaml
join:
  format: "<color:#4eff52>→ <display_name>"
  format-first-time: "<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!"
```

## Параметры

- [Конфиг](/en/config/module/server/message/join/)
- [Права](/en/permissions/module/server/message/join/)

### `format`
- По умолчанию `<color:#4eff52>→ <display_name>`

Сообщение при подключении на сервер

### `format-first-time`
- По умолчанию `<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!`

Сообщение при первом подключении на сервер