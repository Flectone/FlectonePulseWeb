# Command /translateto
Path `messages > en_us.yml > module.command.translateto`

## Explanation
Messages for `/translateto` command
![command translateto](/commandtranslateto.png)

## Edit
```yaml
<en_us.module.command.translateto>
```

### Default
```yaml
command-translateto:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (source lang) (target lang) (message)"
  error: "<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRANSLATETO</u> in <time>"
  format: "<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>"
```

## Options

- Configuration is here [Translateto](/en/config/module/command/command-translateto/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (source lang) (target lang) (message)`

Message on how to use the command

### `error`
- Default `<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language`

Message if a translation error occurred

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRANSLATETO</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>`

Format of message

