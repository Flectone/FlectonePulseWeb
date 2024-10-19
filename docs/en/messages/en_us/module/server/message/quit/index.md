# Quit
Path `messages > en_us.yml > module.server.message.quit`

## Explanation
Messages that a player has disconnected
![quit](/quit.png)

## Edit
```yaml
<en_us.module.server.message.quit>
```

### Default
```yaml
quit:
  format: "<color:#ff4e4e>← <display_name>"
  format-first: "<color:#ff4e4e>← <display_name> <fcolor:1>goodbye"
```

## Options

- Configuration is here [Quit](/en/config/module/server/message/quit/)

### `format`
- Default `<color:#ff4e4e>← <display_name>`

Message when disconnecting from the server

### `format-first`
- Default `<color:#ff4e4e>← <display_name> <fcolor:1>goodbye`

Message when disconnecting from the server for first time 