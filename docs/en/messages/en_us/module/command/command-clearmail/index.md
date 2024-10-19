# Command /clearmail
Path `messages > en_us.yml > module.command.clearmail`

## Explanation
Messages for `/clearmail` command
![command clearmail](/commandclearmail.png)

## Edit
```yaml
<en_us.module.command.clearmail>
```

### Default
```yaml
command-clearmail:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (mail)"
  null-mail: "<color:#ff7171><b>⁉</b> This mail does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARMAIL</u> in <time>"
  format: "<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>"
```

## Options

- Configuration is here [Clearmail](/en/config/module/command/command-clearmail/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (mail)`

Message on how to use the command

### `null-mail`
- Default `<color:#ff7171><b>⁉</b> This mail does not exist`

Message if entered mail is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARMAIL</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:2>✉ [REMOVED] Mail #<id> for <display_name> » <fcolor:1><message>`

Format of message

