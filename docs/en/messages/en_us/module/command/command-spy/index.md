# Command /spy
Path `messages > en_us.yml > module.command.spy`

## Explanation
Messages for `/spy` command
![command spy](/commandspy.gif)

## Edit
```yaml
<en_us.module.command.spy>
```

### Default
```yaml
command-spy:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPY</u> in <time>"
  enable: "<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode"
  disable: "<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode"
  format: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Options

- Configuration is here [Spy](/en/config/module/command/command-spy/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPY</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `enable`
- Default `<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode`

Message when spying is enabled

### `disable`
- Default `<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode`

Message when spying is disabled

### `format`
- Default `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Format of message when a spy action is performed

