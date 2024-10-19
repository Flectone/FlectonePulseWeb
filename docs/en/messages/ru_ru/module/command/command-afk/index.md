# Command /afk
Path `messages > ru_ru.yml > module.command.afk`

## Explanation
Messages for `/afk` command
![command afk](/afkglobalmessage.png)

## Edit
```yaml
<ru_ru.module.command.afk>
```

### Default
```yaml
command-afk:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>AFK</u> через <time>"
```

## Options

- Configuration is here [Afk](/en/config/module/command/command-afk/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>AFK</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

