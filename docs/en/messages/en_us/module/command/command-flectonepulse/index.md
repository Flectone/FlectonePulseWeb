# Command /flectonepulse
Path `messages > en_us.yml > module.command.flectonepulse`

## Explanation
Messages for `/flectonepulse` command
![command flectonepulse](/commandflectonepulse.png)

## Edit
```yaml
<en_us.module.command.flectonepulse>
```

### Default
```yaml
command-flectonepulse:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FLECTONEPULSE</u> in <time>"
  fail: "<color:#ff7171>★ An has error occurred while reloading"
  format: "<fcolor:2>★ Plugin successfully reloaded!"
```

## Options

- Configuration is here [Flectonepulse](/en/config/module/command/command-flectonepulse/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FLECTONEPULSE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `fail`
- Default `<color:#ff7171>★ An has error occurred while reloading`

Message when an error occurs

### `format`
- Default `<fcolor:2>★ Plugin successfully reloaded!`

Format of message

