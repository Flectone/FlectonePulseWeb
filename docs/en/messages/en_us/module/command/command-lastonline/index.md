# Command /lastonline
Path `messages > en_us.yml > module.command.lastonline`

## Explanation
Messages for `/lastonline` command
![command lastonline](/commandlastonline.png)

## Edit
```yaml
<en_us.module.command.lastonline>
```

### Default
```yaml
command-lastonline:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  current: "<fcolor:1>⌛ <display_name> currently on server"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>LASTONLINE</u> in <time>"
  format: "<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago"
```

## Options

- Configuration is here [Lastonline](/en/config/module/command/command-lastonline/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `current`
- Default `<fcolor:1>⌛ <display_name> currently on server`

Message if the entered player is on the server

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>LASTONLINE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago`

Format of message

