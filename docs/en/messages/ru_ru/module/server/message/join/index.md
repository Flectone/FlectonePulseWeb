# Join
Path `messages > ru_ru.yml > module.server.message.join`

## Explanation
Messages that a player has connected
![join](/join.png)

## Edit
```yaml
<ru_ru.module.server.message.join>
```

### Default
```yaml
join:
  format: "<color:#4eff52>→ <display_name>"
  format-first: "<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!"
```

## Options

- Configuration is here [Join](/en/config/module/server/message/join/)

### `format`
- Default  `<color:#4eff52>→ <display_name>`

Message when connecting to the server

### `format-first`
- Default `<color:#4eff52>→ <display_name> <fcolor:1>впервые тут!`

Message when connecting to the server for first time