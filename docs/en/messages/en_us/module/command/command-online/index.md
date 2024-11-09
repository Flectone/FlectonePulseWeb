# Command /online
Path `messages > en_us.yml > module.command.online`

## Explanation
Messages for `/online` command
![command online](/commandonline.png)

## Edit
```yaml
<en_us.module.command.online>
```

### Default
```yaml
command-online:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (first/last/total) (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  current: "<fcolor:1>⌛ <display_name> currently on server"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ONLINE</u> in <time>"
  format-first: "<fcolor:1>⌛ <display_name> was first on server <time> ago"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>has spent a total of <time> on server"
```

## Options

- Configuration is here [Online](/en/config/module/command/command-online/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (first/last/total) (player)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `current`
- Default `<fcolor:1>⌛ <display_name> currently on server`

Message if entered player on server

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ONLINE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format-first`
- Default `<fcolor:1>⌛ <display_name> was first on server <time> ago`

Format of `/online first` message

### `format-last`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago`

Format of `/online last` message

### `format-total`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>has spent a total of <time> on server`

Format of `/online total` message

