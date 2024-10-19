# Command /warn
Path `messages > en_us.yml > module.command.warn`

## Explanation
Messages for `/warn` command
![command warn](/commandwarn.png)

## Edit
```yaml
<en_us.module.command.warn>
```

### Default
```yaml
command-warn:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  default-reason: "You have been warned on this server"
  global: "<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You are warned, <time> left. Reason: <message>"
```

## Options

- Configuration is here [Warn](/en/config/module/command/command-warn/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `null-time`
- Default `<color:#ff7171><b>⁉</b> Incorrect time`

Message if an impossible time is entered

### `default-reason`
- Default `You have been warned on this server`

Default reason if not entered

### `global`
- Default `<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Message to all

### `player`
- Default `<color:#ff7171>☠ You are warned, <time> left. Reason: <message>`

Message for player

