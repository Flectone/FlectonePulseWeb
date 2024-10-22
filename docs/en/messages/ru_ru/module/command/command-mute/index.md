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
  global: "<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>"
  reason:
    default: "Ты был замучен на сервере"
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

### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message for all

### `player`
- Default `<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>`

Message for player

### `reason`
- Default
```yaml
default: "Ты был замучен на сервере"
```

A list with keys and values, where key is a word and the value is a specific reason

::: tip You can write your own reasons
```yaml
random_kek: "Random reason"
```
Then if I write `/mute player 1d random_kek`, the reason will be `Random reason`

If no reason is specified, `default` will be used

:::
