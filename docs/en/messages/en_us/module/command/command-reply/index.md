# Command /reply
Path `messages > en_us.yml > module.command.reply`

## Explanation
Messages for `/reply` command
![command reply](/commandreply.png)

## Edit
```yaml
<en_us.module.command.reply>
```

### Default
```yaml
command-reply:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>REPLY</u> in <time>"
  null-receiver: "<color:#ff7171><b>⁉</b> No one to answer"
```

## Options

- Configuration is here [Reply](/en/config/module/command/command-reply/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>REPLY</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-receiver`
- Default `<color:#ff7171><b>⁉</b> No one to answer`

Message if recipient is not found


