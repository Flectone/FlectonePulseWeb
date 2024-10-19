# Command /firstonline
Path `messages > en_us.yml > module.command.firstonline`

## Explanation
Messages for `/firstonline` command
![command firstonline](/commandfirstonline.png)

## Edit
```yaml
<en_us.module.command.firstonline>
```

### Default
```yaml
command-firstonline:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FIRSTONLINE</u> in <time>"
  format: "<fcolor:1>⌛ <display_name> was first on server <time> ago"
```

## Options

- Configuration is here [Firstonline](/en/config/module/command/command-firstonline/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FIRSTONLINE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>⌛ <display_name> was first on server <time> ago`

Format of message

