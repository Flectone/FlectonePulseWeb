# Command /clearchat
Path `messages > en_us.yml > module.command.clearchat`

## Explanation
Messages for `/clearmail` command
![command clearchat](/commandclearchat.png)

## Edit
```yaml
<en_us.module.command.clearchat>
```

### Default
```yaml
command-clearchat:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARCHAT</u> in <time>"
  format: "<fcolor:1>💬 Chat is cleared"
```

## Options

- Configuration is here [Clearchat](/en/config/module/command/command-clearchat/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARCHAT</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>💬 Chat is cleared`

Message after clearing the chat

