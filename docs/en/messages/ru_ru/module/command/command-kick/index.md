# Command /kick
Path `messages > ru_ru.yml > module.command.kick`

## Explanation
Messages for `/kick` command
![command kick](/commandkick.png)

## Edit
```yaml
<ru_ru.module.command.kick>
```

### Default
```yaml
command-kick:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (причина)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>KICK</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  default-reason: "Исключён модератором"
  global: "<color:#ff7171><br>⏵ Игрок <target> был исключён <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты исключён модератором <moderator> <br>Причина: <message>"
```

## Options

- Configuration is here [Kick](/en/config/module/command/command-kick/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (причина)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>KICK</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `default-reason`
- Default `Исключён модератором`

Default reason if not entered

### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> был исключён <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message for all

### `player`
- Default `<color:#ff7171>☠ Ты исключён модератором <moderator> <br>Причина: <message>`

Message for player

