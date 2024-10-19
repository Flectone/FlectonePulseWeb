# Quit
Path `messages > ru_ru.yml > module.server.message.quit`

## Explanation
Messages that a player has disconnected
![quit](/quit.png)

## Edit
```yaml
<ru_ru.module.server.message.quit>
```

### Default
```yaml
quit:
  format: "<color:#ff4e4e>← <display_name>"
  format-first: "<color:#ff4e4e>← <display_name> <fcolor:1>впервые вышел!"
```

## Options

- Configuration is here [Quit](/en/config/module/server/message/quit/)

### `format`
- Default `<color:#ff4e4e>← <display_name>`

Message when disconnecting from the server

### `format-first`
- Default `<color:#ff4e4e>← <display_name> <fcolor:1>впервые вышел!`

Message when disconnecting from the server for first time 