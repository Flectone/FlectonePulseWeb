# Command /chatcolor
Path `messages > ru_ru.yml > module.command.chatcolor`

## Explanation
Messages for `/chatcolor` command
![command chatcolor](/commandchatcolor.png)

## Edit
```yaml
<ru_ru.module.command.chatcolor>
```

### Default
```yaml
command-chatcolor:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATCOLOR</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  incorrect: "<color:#ff7171><b>⁉</b> Цвета введены неверно"
  format: "<color:#98FB98>★ Теперь цвета <fcolor:1>сообщение</fcolor> <fcolor:2>сообщение</fcolor> <fcolor:3>сообщение <fcolor:4>сообщение"
```

## Options

- Configuration is here [Chatcolor](/en/config/module/command/command-chatcolor/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATCOLOR</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `incorrect`
- Default `<color:#ff7171><b>⁉</b> Цвета введены неверно`

Message if colors are entered incorrectly

### `format`
- Default `<color:#98FB98>★ Теперь цвета <fcolor:1>сообщение</fcolor> <fcolor:2>сообщение</fcolor> <fcolor:3>сообщение <fcolor:4>сообщение`

Format of message

