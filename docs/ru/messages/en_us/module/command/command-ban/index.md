# Комманда /ban
Путь `messages > en_us.yml > module.command.ban`

## Пояснение
Сообщения для комманды `/ban`
![command ban](/commandban.png)

## Редактирование
```yaml
<en_us.module.command.ban>
```

### По умолчанию
```yaml
command-ban:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TEMPBAN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  temporarily:
    default-reason: "You have been banned from this server"
    try-connect: "<color:#ff7171>☠ Banned <target> tried to log in, <time> left"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>"
  permanent:
    default-reason: "You have been banned permanent from this server"
    try-connect: "<color:#ff7171>☠ Permanently banned <target> tried to log in"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned permanently <br>Reason: <message>"
```

## Параметры

- Конфигурация происходит тут [Ban](/ru/config/module/command/command-ban/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TEMPBAN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `temporarily`

::: details Сообщения для временной блокировки
#### `default-reason`
- По умолчанию `You have been banned from this server`

Причина по умолчанию, если она не введена

#### `try-connect`
- По умолчанию `<color:#ff7171>☠ Banned <target> tried to log in, <time> left`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

#### `player`
- По умолчанию `<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>`

Сообщение для игрока

:::

### `permanent`

::: details Сообщения для блокировки навсегда
#### `default-reason`
- По умолчанию `You have been banned permanent from this server`

Причина по умолчанию, если она не введена

#### `try-connect`
- По умолчанию `<color:#ff7171>☠ Permanently banned <target> tried to log in`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

#### `player`
- По умолчанию `<color:#ff7171>☠ You are banned permanently <br>Reason: <message>`

Сообщение для игрока

:::

