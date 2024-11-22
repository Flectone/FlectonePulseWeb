# Спавнпоинт
Путь `messages > en_us.yml > module.server.message.spawnpoint`

## Пояснение
Сообщение при использовании `/spawnpoint`
![spawnpoint](/spawnpoint.png)

## Редактирование
```yaml
<en_us.module.server.message.spawnpoint>
```

### По умолчанию
```yaml
spawnpoint:
  single: "<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <display_name>"
  multiple: "<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <fcolor:2><count></fcolor:2> players"
```

## Параметры

- [Конфиг](/en/config/module/server/message/spawnpoint/)
- [Права](/en/permissions/module/server/message/spawnpoint/)

### `single`
- По умолчанию `<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <display_name>`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <fcolor:2><count></fcolor:2> players`

Сообщение, если команда применяется для многих игроков