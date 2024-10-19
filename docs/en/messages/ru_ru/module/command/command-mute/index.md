# Command /mute
Path `messages > ru_ru.yml > module.command.mute`

## Explanation
Messages for `/mute` command
![command mute](/commandmute.png)

## Edit
```yaml
<ru_ru.module.command.mute>
```

### Default
```yaml
command-mute:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MUTE</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  default-reason: "Ты был замучен на сервере"
  global: "<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>"
```

## Options

- Configuration is here [Mute](/en/config/module/command/command-mute/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MUTE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if the entered player is not found

### `null-time`
- Default `<color:#ff7171><b>⁉</b> Невозможное время`

Message if an impossible time is entered

### `default-reason`
- Default `Ты был замучен на сервере`

Default reason if not entered

### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message for all

### `player`
- Default `<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>`

Message for player

