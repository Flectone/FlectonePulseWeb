# Command /chatcolor
Path `messages > en_us.yml > module.command.chatcolor`

## Explanation
Messages for `/chatcolor` command
![command chatcolor](/commandchatcolor.png)

## Edit
```yaml
<en_us.module.command.chatcolor>
```

### Default
```yaml
command-chatcolor:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATCOLOR</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  incorrect: "<color:#ff7171><b>⁉</b> Incorrect colors entered"
  format: "<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message"
```

## Options

- Configuration is here [Chatcolor](/en/config/module/command/command-chatcolor/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATCOLOR</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `incorrect`
- Default `<color:#ff7171><b>⁉</b> Incorrect colors entered`

Message if colors are entered incorrectly

### `format`
- Default `<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message`

Format of message

