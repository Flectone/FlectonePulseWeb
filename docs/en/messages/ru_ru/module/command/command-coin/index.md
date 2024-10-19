# Command /coin
Path `messages > ru_ru.yml > module.command.coin`

## Explanation
Messages for `/coin` command
![command coin](/commandcoin.png)

## Edit
```yaml
<ru_ru.module.command.coin>
```

### Default
```yaml
command-coin:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>COIN</u> через <time>"
  draw: "<fcolor:1>✎ <display_name> неудачно подбросил монетку ребром :)"
  head: "орёл"
  tail: "решка"
  format: "<fcolor:1>✎ <display_name> подбросил монетку - <result>"
```

## Options

- Configuration is here [Coin](/en/config/module/command/command-coin/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>COIN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `draw`
- Default `<fcolor:1>✎ <display_name> неудачно подбросил монетку ребром :)`

Message if coin falls on edge

### `head`
- Default `орёл`

The name of side of coin

### `tail`
- Default `решка`

The name of other side of coin

### `format`
- Default `<fcolor:1>✎ <display_name> подбросил монетку - <result>`

Format of message

