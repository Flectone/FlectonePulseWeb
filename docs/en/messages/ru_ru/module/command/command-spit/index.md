# Command /spit
Path `messages > ru_ru.yml > module.command.spit`

## Explanation
Messages for `/spit` command
![command spit](/commandspit.gif)

## Edit
```yaml
<ru_ru.module.command.spit>
```

### Default
```yaml
command-spit:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>"
```

## Options

- Configuration is here [Spit](/en/config/module/command/command-spit/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

