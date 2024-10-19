# Command /try
Path `messages > en_us.yml > module.command.try`

## Explanation
Messages for `/try` command
![command try](/commandtry.png)

## Edit
```yaml
<en_us.module.command.try>
```

### Default
```yaml
command-try:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRY</u> in <time>"
  format-true: "<color:#98FB98>☺ <display_name> <message> <percent>%"
  format-false: "<color:#F08080>☹ <display_name> <message> <percent>%"
```

## Options

- Configuration is here [Try](/en/config/module/command/command-try/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRY</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format-true`
- Default `<color:#98FB98>☺ <display_name> <message> <percent>%`

Format of message if the action is successful

### `format-false`
- По умолчанию `<color:#F08080>☹ <display_name> <message> <percent>%`

Format of message if the action is unsuccessful


