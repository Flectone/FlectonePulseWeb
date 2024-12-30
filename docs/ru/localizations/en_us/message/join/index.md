# Подключение
Путь `localizations > en_us.yml > message.join`

## Пояснение
Сообщения о том, что игрок подключился
![join](/join.png)

## Редактирование
```yaml
<en_us.message.join>
```

### По умолчанию
```yaml
join:
  format: "<color:#4eff52>→ <display_name>"
  format-first-time: "<color:#4eff52>→ <display_name> <fcolor:1>welcome!"
```

## Параметры

- [Сообщения](/ru/message/join/)
- [Права](/ru/permission/message/join/)

### `format`
- По умолчанию `<color:#4eff52>→ <display_name>`

Сообщение при подключении на сервер

### `format-first-time`
- По умолчанию `<color:#4eff52>→ <display_name> <fcolor:1>welcome!`

Сообщение при первом подключении на сервер