# Clear
Path `messages > ru_ru.yml > module.server.message.clear`

## Explanation
Message when using `/clear`
![clear](/clear.png)

## Edit
```yaml
<ru_ru.module.server.message.clear>
```

### Default
```yaml
clear:
  single: "<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у игрока <display_name>"
  multiple: "<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у <fcolor:2><count></fcolor:2> игроков"
```

## Options

- Configuration is here [Clear](/en/config/module/server/message/clear/)

### `single`
- Default `<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у игрока <display_name>`

Message if a specific player's inventory is cleared

### `multiple`
- Default `<fcolor:1>🌊 Удалено <fcolor:2><number></fcolor:2> предметов у <fcolor:2><count></fcolor:2> игроков`

Message if inventory of many players is cleared