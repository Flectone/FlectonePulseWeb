# Command /ignore
Path `messages > en_us.yml > module.command.ignore`

## Explanation
Messages for `/ignore` command
![command ignore](/commandignore.png)

## Edit
```yaml
<en_us.module.command.ignore>
```

### Default
```yaml
command-ignore:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORE</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't ignore yourself"
  he-ignore: "<color:#ff7171><b>⁉</b> You can't write to him because he ignore you"
  you-ignore: "<color:#ff7171><b>⁉</b> You can't write to him because you ignore him"
  ignore: "<color:#ff7171>☹ You ignore <display_name>"
  unignore: "<color:#98FB98>☺ You unignore <display_name>"
```

## Options

- Configuration is here [Ignore](/en/config/module/command/command-ignore/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `myself`
- Default `<color:#ff7171><b>⁉</b> You can't ignore yourself`

Message if a player tries to ignore himself

### `he-ignore`
- Default `<color:#ff7171><b>⁉</b> You can't write to him because he ignore you`

Message if the recipient ignores the sender

### `you-ignore`
- Default `<color:#ff7171><b>⁉</b> You can't write to him because you ignore him`

Message if the sender ignores the recipient

### `ignore`
- Default `<color:#ff7171>☹ You ignore <display_name>`

Message on successful ignoring

### `unignore`
- Default `<color:#98FB98>☺ You unignore <display_name>`

Message when ignore is removed

