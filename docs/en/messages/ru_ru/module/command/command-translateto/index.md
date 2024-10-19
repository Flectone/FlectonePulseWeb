# Command /translateto
Path `messages > ru_ru.yml > module.command.translateto`

## Explanation
Messages for `/translateto` command
![command translateto](/commandtranslateto.png)

## Edit
```yaml
<ru_ru.module.command.translateto>
```

### Default
```yaml
command-translateto:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (исходный язык) (выбранный язык) (сообщение)"
  error: "<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRANSLATETO</u> через <time>"
  format: "<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>"
```

## Options

- Configuration is here [Translateto](/en/config/module/command/command-translateto/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (исходный язык) (выбранный язык) (сообщение)`

Message on how to use the command

### `error`
- Default `<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык`

Message if a translation error occurred

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRANSLATETO</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>`

Format of message

