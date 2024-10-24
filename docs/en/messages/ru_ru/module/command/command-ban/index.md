# Command /ban
Path `messages > ru_ru.yml > module.command.ban`

## Explanation
Messages for `/ban` command
![command ban](/commandban.png)

## Edit
```yaml
<ru_ru.module.command.ban>
```

### Default
```yaml
command-ban:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BAN</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  temporarily:
    try-connect: "<color:#ff7171>☠ Заблокированный <target> пытался подключиться, ему осталось <time>"
    global: "<color:#ff7171><br>⏵ Игрок <target> заблокирован на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
    player: "<color:#ff7171>☠ Ты заблокирован, осталось <time> <br>Причина: <message>"
    reason:
      default: "Ты временно заблокирован на этом сервере"
  permanent:
    try-connect: "<color:#ff7171>☠ Навсегда заблокированный <target> пытался подключиться"
    global: "<color:#ff7171><br>⏵ Игрок <target> заблокирован навсегда <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
    player: "<color:#ff7171>☠ Ты заблокирован навсегда, <br>Причина: <message>"
    reason:
      default: "Ты заблокирован на этом сервере"
```

## Options

- Configuration is here [Ban](/en/config/module/command/command-ban/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BAN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `null-time`
- Default `<color:#ff7171><b>⁉</b> Невозможное время`

Message if an impossible time is entered

### `temporarily`

::: details Messages for temporary ban

#### `try-connect`
- Default `<color:#ff7171>☠ Заблокированный <target> пытался подключиться, ему осталось <time>`

Message if a banned player tried to connect

#### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> заблокирован на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message for all

#### `player`
- Default `<color:#ff7171>☠ Ты заблокирован, осталось <time> <br>Причина: <message>`

Message for player

#### `reason`
- Default
```yaml
default: "Ты временно заблокирован на этом сервере"
```

A list with keys and values, where key is a word and the value is a specific reason

::: tip You can write your own reasons
```yaml
random_kek: "Random reason"
```
Then if I write `/ban player 1d random_kek`, the reason will be `Random reason`

If no reason is specified, `default` will be used

:::

### `permanent`

::: details Messages to ban permanently

#### `try-connect`
- Default `<color:#ff7171>☠ Навсегда заблокированный <target> пытался подключиться`

Message if a banned player tried to connect

#### `global`
- Default `<color:#ff7171><br>⏵ Игрок <target> заблокирован навсегда <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Message for all

#### `player`
- Default `<color:#ff7171>☠ Ты заблокирован навсегда, <br>Причина: <message>`

Message for player

#### `reason`
- Default
```yaml
default: "Ты заблокирован на этом сервере"
```

A list with keys and values, where key is a word and the value is a specific reason

::: tip You can write your own reasons
```yaml
random_kek: "Random reason"
```
Then if I write `/ban player random_kek`, the reason will be `Random reason`

If no reason is specified, `default` will be used

:::

