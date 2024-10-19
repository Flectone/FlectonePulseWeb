# Command /flectonepulse
Path `messages > ru_ru.yml > module.command.flectonepulse`

## Explanation
Messages for `/flectonepulse` command
![command flectonepulse](/commandflectonepulse.png)

## Edit
```yaml
<ru_ru.module.command.flectonepulse>
```

### Default
```yaml
command-flectonepulse:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FLECTONEPULSE</u> через <time>"
  fail: "<color:#ff7171>★ Возникла проблема при перезагрузке"
  format: "<fcolor:2>★ Плагин успешно перезагружен!"
```

## Options

- Configuration is here [Flectonepulse](/en/config/module/command/command-flectonepulse/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FLECTONEPULSE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `fail`
- Default `<color:#ff7171>★ Возникла проблема при перезагрузке`

Message when an error occurs

### `format`
- Default `<fcolor:2>★ Плагин успешно перезагружен!`

Format of message

