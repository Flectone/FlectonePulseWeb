# Очищение
Путь `messages > en_us.yml > module.server.message.clear`

## Пояснение
Сообщение при использовании `/clear`
![clear](/clear.png)

## Редактирование
```yaml
<en_us.module.server.message.clear>
```

### По умолчанию
```yaml
clear:
  single: "<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from player <display_name>"
  multiple: "<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from <fcolor:2><count></fcolor:2> players"
```

## Параметры

- Конфигурация происходит тут [Очищение](/ru/config/module/server/message/clear/)

### `single`
- По умолчанию `<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from player <display_name>`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from <fcolor:2><count></fcolor:2> players`

Сообщение, если команда применяется для многих игроков