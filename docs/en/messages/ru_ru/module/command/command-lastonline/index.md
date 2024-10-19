# Command /lastonline
Path `messages > ru_ru.yml > module.command.lastonline`

## Explanation
Messages for `/lastonline` command
![command lastonline](/commandlastonline.png)

## Edit
```yaml
<ru_ru.module.command.lastonline>
```

### Default
```yaml
command-lastonline:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>LASTONLINE</u> через <time>"
  format: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
```

## Options

- Configuration is here [Lastonline](/en/config/module/command/command-lastonline/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `current`
- Default `<fcolor:1>⌛ <display_name> сейчас на сервере`

Message if the entered player is on the server

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>LASTONLINE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад`

Format of message

