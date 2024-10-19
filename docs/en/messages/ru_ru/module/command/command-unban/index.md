# Command /unban
Path `messages > ru_ru.yml > module.command.unban`

## Explanation
Messages for `/unban` command
![command unban](/commandunban.png)

## Edit
```yaml
<ru_ru.module.command.unban>
```

### Default
```yaml
command-unban:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNBAN</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not: "<color:#ff7171><b>⁉</b> Игрок не заблокирован"
  format: "<color:#98FB98>☻ Игрок <display_name> разблокирован"
```

## Options

- Configuration is here [Unban](/en/config/module/command/command-unban/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNBAN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `not`
- Default `<color:#ff7171><b>⁉</b> Игрок не заблокирован`

Message if the entered player is not banned

### `format`
- Default `<color:#98FB98>☻ Игрок <display_name> разблокирован`

Message when unbanning
