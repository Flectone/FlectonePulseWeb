# Command /mail
Path `messages > en_us.yml > module.command.mail`

## Explanation
Messages for `/mail` command
![command mail](/commandmail.png)

## Edit
```yaml
<en_us.module.command.mail>
```

### Default
```yaml
command-mail:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAIL</u> in <time>"
  sender: "<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>"
```

## Options

- Configuration is here [Mail](/en/config/module/command/command-mail/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAIL</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `sender`
- Default `<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>`

Message to sender

### `receiver`
- Default `<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>`

Message to receiver

