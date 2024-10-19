# Command /unban
Path `messages > en_us.yml > module.command.unban`

## Explanation
Messages for `/unban` command
![command unban](/commandunban.png)

## Edit
```yaml
<en_us.module.command.unban>
```

### Default
```yaml
command-unban:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNBAN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not banned"
  format: "<color:#98FB98>☻ Player <display_name> unbanned"
```

## Options

- Configuration is here [Unban](/en/config/module/command/command-unban/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNBAN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> This player is not banned`

Message if the entered player is not banned

### `format`
- Default `<color:#98FB98>☻ Player <display_name> unbanned`

Message when unbanning
