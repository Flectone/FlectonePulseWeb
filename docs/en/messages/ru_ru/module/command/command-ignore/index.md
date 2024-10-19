# Command /ignore
Path `messages > ru_ru.yml > module.command.ignore`

## Explanation
Messages for `/ignore` command
![command ignore](/commandignore.png)

## Edit
```yaml
<ru_ru.module.command.ignore>
```

### Default
```yaml
command-ignore:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>IGNORE</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  myself: "<color:#ff7171><b>⁉</b> Нельзя игнорировать самого себя"
  he-ignore: "<color:#ff7171><b>⁉</b> Он тебя игнорирует"
  you-ignore: "<color:#ff7171><b>⁉</b> Ты его игнорируешь"
  ignore: "<color:#ff7171>☹ Ты игнорируешь <display_name>"
  unignore: "<color:#98FB98>☺ Ты перестал игнорировать <display_name>"
```

## Options

- Configuration is here [Ignore](/en/config/module/command/command-ignore/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>IGNORE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `myself`
- Default `<color:#ff7171><b>⁉</b> Нельзя игнорировать самого себя`

Message if a player tries to ignore himself

### `he-ignore`
- Default `<color:#ff7171><b>⁉</b> Он тебя игнорирует`

Message if the recipient ignores the sender

### `you-ignore`
- Default `<color:#ff7171><b>⁉</b> Ты его игнорируешь`

Message if the sender ignores the recipient

### `ignore`
- Default `<color:#ff7171>☹ Ты игнорируешь <display_name>`

Message on successful ignoring

### `unignore`
- Default `<color:#98FB98>☺ Ты перестал игнорировать <display_name>`

Message when ignore is removed

