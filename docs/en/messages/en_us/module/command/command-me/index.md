# Command /me
Path `messages > en_us.yml > module.command.me`

## Explanation
Messages for `/me` command
![command me](/commandme.png)

## Edit
```yaml
<en_us.module.command.me>
```

### Default
```yaml
command-me:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ME</u> in <time>"
  format: "<fcolor:1>✎ <display_name> <message>"
```

## Options

- Configuration is here [Me](/en/config/module/command/command-me/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ME</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>✎ <display_name> <message>`

Format of message
![command me](/commandme.png)



