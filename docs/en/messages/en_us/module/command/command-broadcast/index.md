# Command /broadcast
Path `messages > en_us.yml > module.command.broadcast`

## Explanation
Messages for `/broadcast` command
![command broadcast](/commandbroadcast.png)

## Edit
```yaml
<en_us.module.command.broadcast>
```

### Default
```yaml
command-broadcast:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BROADCAST</u> in <time>"
  format: "<color:#fce303>🕫 Message for all from <display_name> <br>❝ <message> ❠"
```

## Options

- Configuration is here [Broadcast](/en/config/module/command/command-broadcast/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BROADCAST</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<color:#fce303>🕫 Message for all from <display_name> <br>❝ <message> ❠`

Format of message

