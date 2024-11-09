# Command /online
Path `messages > ru_ru.yml > module.command.online`

## Explanation
Messages for `/online` command
![command online](/commandonline.png)

## Edit
```yaml
<ru_ru.module.command.online>
```

### Default
```yaml
command-online:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (first/last/total) (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ONLINE</u> через <time>"
  format-first: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>"
```

## Options

- Configuration is here [Online](/en/config/module/command/command-online/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (first/last/total) (игрок)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `current`
- Default `<fcolor:1>⌛ <display_name> сейчас на сервере`

Message if entered player on server

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ONLINE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format-first`
- Default `<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад`

Format of `/online first` message

### `format-last`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад`

Format of `/online last` message

### `format-total`
- Default `<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>`

Format of `/online total` message

