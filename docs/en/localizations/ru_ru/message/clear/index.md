# Очищение
Путь `localizations > ru_ru.yml > message.clear`

## Пояснение
Сообщение при использовании `/clear`
![clear](/clear.png)

## Редактирование
```yaml
<ru_ru.message.clear>
```

### По умолчанию
```yaml
clear:
  single: "<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у игрока <display_name>"
  multiple: "<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у <fcolor:2><count></fcolor:2> игроков"
```

## Параметры

- [Сообщения](/ru/message/clear/)
- [Права](/ru/permission/message/clear/)

### `single`
- По умолчанию `<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у игрока <display_name>`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у <fcolor:2><count></fcolor:2> игроков`

Сообщение, если команда применяется для многих игроков