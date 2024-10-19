# Command /mark
Path `messages > ru_ru.yml > module.command.mark`

## Explanation
Messages for `/mark` command
![command mark](/commandmark.gif)

## Edit
```yaml
<ru_ru.module.command.mark>
```

### Default
```yaml
command-mark:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (цвет)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>"
```

## Options

- Configuration is here [Mark](/en/config/module/command/command-mark/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (цвет)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled
