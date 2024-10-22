# Command /warn
Path `messages > ru_ru.yml > module.command.warn`

## Explanation
Messages for `/warn` command
![command warn](/commandwarn.png)

## Edit
```yaml
<ru_ru.module.command.warn>
```

### Default
```yaml
command-warn:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>WARN</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global: "<color:#ff7171><br>⏵ Игрок <target> получил предупреждение на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты получил предупреждение на <time>. Причина: <message>"
  reason:
    default: "Ты получил предупреждение"
```

## Options

- Configuration is here [Warn](/en/config/module/command/command-warn/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>WARN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `null-time`
- Default `<color:#ff7171><b>⁉</b> Невозможное время`

Message if an impossible time is entered

### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> получил предупреждение на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message to all

### `player`
- Default `<color:#ff7171>☠ Ты получил предупреждение на <time>. Причина: <message>`

Message for player

### `reason`
- Default
```yaml
default: "Ты получил предупреждение"
```

A list with keys and values, where key is a word and the value is a specific reason

::: tip You can write your own reasons
```yaml
random_kek: "Random reason"
```
Then if I write `/warn player 1d random_kek`, the reason will be `Random reason`

If no reason is specified, `default` will be used

:::

