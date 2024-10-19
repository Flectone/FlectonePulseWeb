# Command /afk
Path `messages > en_us.yml > module.command.afk`

## Explanation
Messages for `/afk` command
![command afk](/afkglobalmessage.png)

## Edit
```yaml
<en_us.module.command.afk>
```

### Default
```yaml
command-afk:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>AFK</u> in <time>"
```

## Options

- Configuration is here [Afk](/en/config/module/command/command-afk/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>AFK</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

