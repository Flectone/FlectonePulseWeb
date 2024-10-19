# Command /mark
Path `messages > en_us.yml > module.command.mark`

## Explanation
Messages for `/mark` command
![command mark](/commandmark.gif)

## Edit
```yaml
<en_us.module.command.mark>
```

### Default
```yaml
command-mark:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (color)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>"
```

## Options

- Configuration is here [Mark](/en/config/module/command/command-mark/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (color)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled
