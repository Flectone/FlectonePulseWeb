# Спавнпоинт
Путь `messages > ru_ru.yml > module.server.message.spawnpoint`

## Пояснение
Сообщение при использовании `/spawnpoint`
![spawnpoint](/spawnpoint.png)

## Редактирование
```yaml
<ru_ru.module.server.message.spawnpoint>
```

### По умолчанию
```yaml
spawnpoint:
  single: "<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <display_name>"
  multiple: "<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <fcolor:2><count></fcolor:2> игроков"
```

## Параметры

- Конфигурация происходит тут [Спавнпоинт](/ru/config/module/server/message/spawnpoint/)

### `single`
- По умолчанию `<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <display_name>`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <fcolor:2><count></fcolor:2> игроков`

Сообщение, если команда применяется для многих игроков