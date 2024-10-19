# Command /unwarn
Path `messages > en_us.yml > module.command.unwarn`

## Explanation
Messages for `/unwarn` command
![command unwarn](/commandunwarn.png)

## Edit
```yaml
<en_us.module.command.unwarn>
```

### Default
```yaml
command-unwarn:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNWARN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not warned"
  format: "<color:#98FB98>☻ Player <display_name> unwarned"
```

## Options

- Configuration is here [Unwarn](/en/config/module/command/command-unwarn/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNWARN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> This player is not warned`

Message if entered player does not have a warning

### `format`
- Default `<color:#98FB98>☻ Player <display_name> unwarned`

Message when unwarning
