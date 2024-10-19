# Command /coin
Path `messages > en_us.yml > module.command.coin`

## Explanation
Messages for `/coin` command
![command coin](/commandcoin.png)

## Edit
```yaml
<en_us.module.command.coin>
```

### Default
```yaml
command-coin:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>COIN</u> in <time>"
  draw: "<fcolor:1>✎ <display_name> player got edge :)"
  head: "heads"
  tail: "tails"
  format: "<fcolor:1>✎ <display_name> player got <result>"
```

## Options

- Configuration is here [Coin](/en/config/module/command/command-coin/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>COIN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `draw`
- Default `<fcolor:1>✎ <display_name> player got edge :)`

Message if coin falls on edge

### `head`
- Default `heads`

The name of side of coin

### `tail`
- Default `tails`

The name of other side of coin

### `format`
- Default `<fcolor:1>✎ <display_name> player got <result>`

Format of message

