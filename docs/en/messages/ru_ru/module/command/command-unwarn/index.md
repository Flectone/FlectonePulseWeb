# Command /unwarn
Path `messages > ru_ru.yml > module.command.unwarn`

## Explanation
Messages for `/unwarn` command
![command unwarn](/commandunwarn.png)

## Edit
```yaml
<ru_ru.module.command.unwarn>
```

### Default
```yaml
command-unwarn:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNWARN</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not: "<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений"
  format: "<color:#98FB98>☻ С игрока <display_name> снято предупреждение"
```

## Options

- Configuration is here [Unwarn](/en/config/module/command/command-unwarn/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNWARN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений`

Message if entered player does not have a warning

### `format`
- Default `<color:#98FB98>☻ С игрока <display_name> снято предупреждение`

Message when unwarning
