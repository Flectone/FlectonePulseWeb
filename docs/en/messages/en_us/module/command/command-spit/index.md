# Command /spit
Path `messages > en_us.yml > module.command.spit`

## Explanation
Messages for `/spit` command
![command spit](/commandspit.gif)

## Edit
```yaml
<en_us.module.command.spit>
```

### Default
```yaml
command-spit:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>"
```

## Options

- Configuration is here [Spit](/en/config/module/command/command-spit/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

