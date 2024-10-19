# Command /clearchat
Path `messages > ru_ru.yml > module.command.clearchat`

## Explanation
Messages for `/clearmail` command
![command clearchat](/commandclearchat.png)

## Edit
```yaml
<ru_ru.module.command.clearchat>
```

### Default
```yaml
command-clearchat:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARCHAT</u> через <time>"
  format: "<fcolor:1>💬 Чат очищен"
```

## Options

- Configuration is here [Clearchat](/en/config/module/command/command-clearchat/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARCHAT</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>💬 Чат очищен`

Message after clearing the chat

