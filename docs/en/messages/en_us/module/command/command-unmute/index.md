# Command /unmute
Path `messages > en_us.yml > module.command.unmute`

## Explanation
Messages for `/unmute` command
![command unmute](/commandunmute.png)

## Edit
```yaml
<en_us.module.command.unmute>
```

### Default
```yaml
command-unmute:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNMUTE</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not: "<color:#ff7171><b>⁉</b> This player is not muted"
  format: "<color:#98FB98>☻ Player <display_name> unmuted"
```

## Options

- Configuration is here [Unmute](/en/config/module/command/command-unmute/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>UNMUTE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> This player is not muted`

Message if the entered player is not muted

### `format`
- Default `<color:#98FB98>☻ Player <display_name> unmuted`

Message when unmuting
