# Command /tell
Path `messages > en_us.yml > module.command.tell`

## Explanation
Messages for `/tell` command
![command tell](/commandtell.png)

## Edit
```yaml
<en_us.module.command.tell>
```

### Default
```yaml
command-tell:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TELL</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  sender: "<fcolor:2>✉ You → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → You » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Note] <fcolor:1><message>"
```

## Options

- Configuration is here [Tell](/en/config/module/command/command-tell/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TELL</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `sender`
- Default `<fcolor:2>✉ You → <display_name> » <fcolor:1><message>`

Message to sender

### `receiver`
- Default `<fcolor:2>✉ <display_name> → You » <fcolor:1><message>`

Message to recipient

### `myself`
- Default `<fcolor:2>✉ [Note] <fcolor:1><message>`

Message is for sender, if he is recipient, i.e. for himself


