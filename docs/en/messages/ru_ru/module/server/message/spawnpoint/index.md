# Spawnpoint
Path `messages > ru_ru.yml > module.server.message.spawnpoint`

## Explanation
Message when using `/spawnpoint`
![spawnpoint](/spawnpoint.png)

## Edit
```yaml
<ru_ru.module.server.message.spawnpoint>
```

### Default
```yaml
spawnpoint:
  single: "<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <display_name>"
  multiple: "<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <fcolor:2><count></fcolor:2> игроков"
```

## Options

- Configuration is here [Spawnpoint](/en/config/module/server/message/spawnpoint/)

### `single`
- Default `<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <display_name>`

Message if command is applied to a specific player

### `multiple`
- Default `<fcolor:1>🛌 Установлена точка возрождения <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] в <fcolor:2><world></fcolor:2> для <fcolor:2><count></fcolor:2> игроков`

Message if command is applied to many players