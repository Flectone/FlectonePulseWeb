# Command /kick
Path `messages > en_us.yml > module.command.kick`

## Explanation
Messages for `/kick` command
![command kick](/commandkick.png)

## Edit
```yaml
<en_us.module.command.kick>
```

### Default
```yaml
command-kick:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (reason)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>KICK</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  default-reason: "Kicked by an operator"
  global: "<color:#ff7171><br>⏵ Player <target> was kicked <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You were kicked by <moderator> <br>Reason: <message>"
```

## Options

- Configuration is here [Kick](/en/config/module/command/command-kick/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (reason)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>KICK</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `default-reason`
- Default `Kicked by an operator`

Default reason if not entered

### `global`
- Default `<color:#ff7171><br>⏵ Player <target> was kicked <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Message for all

### `player`
- Default `<color:#ff7171>☠ You were kicked by <moderator> <br>Reason: <message>`

Message for player

