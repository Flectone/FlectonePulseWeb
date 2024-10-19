# Command /spy
Path `messages > ru_ru.yml > module.command.spy`

## Explanation
Messages for `/spy` command
![command spy](/commandspy.gif)

## Edit
```yaml
<ru_ru.module.command.spy>
```

### Default
```yaml
command-spy:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPY</u> через <time>"
  enable: "<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку"
  disable: "<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку"
  format: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Options

- Configuration is here [Spy](/en/config/module/command/command-spy/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPY</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `enable`
- Default `<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку`

Message when spying is enabled

### `disable`
- Default `<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку`

Message when spying is disabled

### `format`
- Default `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Format of message when a spy action is performed

