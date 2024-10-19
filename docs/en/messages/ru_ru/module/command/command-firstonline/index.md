# Command /firstonline
Path `messages > ru_ru.yml > module.command.firstonline`

## Explanation
Messages for `/firstonline` command
![command firstonline](/commandfirstonline.png)

## Edit
```yaml
<ru_ru.module.command.firstonline>
```

### Default
```yaml
command-firstonline:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FIRSTONLINE</u> через <time>"
  format: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
```

## Options

- Configuration is here [Firstonline](/en/config/module/command/command-firstonline/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FIRSTONLINE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад`

Format of message

