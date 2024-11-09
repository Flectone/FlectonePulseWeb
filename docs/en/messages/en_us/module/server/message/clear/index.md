# Clear
Path `messages > en_us.yml > module.server.message.clear`

## Explanation
Message when using `/clear`
![clear](/clear.png)

## Edit
```yaml
<en_us.module.server.message.clear>
```

### Default
```yaml
clear:
  single: "<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from player <display_name>"
  multiple: "<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from <fcolor:2><count></fcolor:2> players"
```

## Options

- Configuration is here [Clear](/en/config/module/server/message/clear/)

### `single`
- Default `<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from player <display_name>`

Message if a specific player's inventory is cleared

### `multiple`
- Default `<fcolor:1>🌊 Removed <fcolor:2><number></fcolor:2> item(s) from <fcolor:2><count></fcolor:2> players`

Message if inventory of many players is cleared