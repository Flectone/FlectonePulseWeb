# Command /unmute
Path `messages > ru_ru.yml > module.command.unmute`

## Explanation
Messages for `/unmute` command
![command unmute](/commandunmute.png)

## Edit
```yaml
<ru_ru.module.command.unmute>
```

### Default
```yaml
command-unmute:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNMUTE</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not: "<color:#ff7171><b>⁉</b> Игрок не замучен"
  format: "<color:#98FB98>☻ Игрок <display_name> размучен"
```

## Options

- Configuration is here [Unmute](/en/config/module/command/command-unmute/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNMUTE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> Игрок не замучен`

Message if the entered player is not muted

### `format`
- Default `<color:#98FB98>☻ Игрок <display_name> размучен`

Message when unmuting
