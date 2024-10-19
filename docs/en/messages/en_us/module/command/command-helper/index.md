# Command /helper
Path `messages > en_us.yml > module.command.helper`

## Explanation
Messages for `/helper` command
![command helper](/commandhelper.png)

## Edit
```yaml
<en_us.module.command.helper>
```

### Default
```yaml
command-helper:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>HELPER</u> in <time>"
  null-helper: "<color:#ff7171><b>⁉</b> There are no people who can help you"
  global: "<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Request sent, awaiting reply"
```

## Options

- Configuration is here [Helper](/en/config/module/command/command-helper/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>HELPER</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-helper`
- Default `<color:#ff7171><b>⁉</b> There are no people who can help you`

Message if there are no people on server who can help

### `global`
- Default `<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>`

A message to those who need to help

### `player`
- Default `<fcolor:2>👤 Request sent, awaiting reply`

Message for player

