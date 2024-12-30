# Подключение
Путь `localizations > ru_ru.yml > message.join`

## Пояснение
Сообщения о том, что игрок подключился
![join](/join.png)

## Редактирование
```yaml
<ru_ru.message.join>
```

### По умолчанию
```yaml
join:
  format: "<color:#4eff52>→ <display_name>"
  format-first-time: "<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!"
```

## Параметры

- [Сообщения](/ru/message/join/)
- [Права](/ru/permission/message/join/)

### `format`
- По умолчанию `<color:#4eff52>→ <display_name>`

Сообщение при подключении на сервер

### `format-first-time`
- По умолчанию `<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!`

Сообщение при первом подключении на сервер