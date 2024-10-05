# Комманда /mute
Путь `messages > en_us.yml > module.command.mute`

## Пояснение
Сообщения для комманды `/mute`
![command mute](/commandmute.png)

## Редактирование
```yaml
<en_us.module.command.mute>
```

### По умолчанию
```yaml
command-mute:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MUTE</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  default-reason: "You have been muted on this server"
  global: "<color:#ff7171><br>⏵ Player <target> has been muted for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You are muted, <time> left. Reason: <message>"
```

## Параметры

- Конфигурация происходит тут [Mute](/ru/config/module/command/command-mute/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MUTE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `default-reason`
- По умолчанию `You have been muted on this server`

Причина по умолчанию, если она не введена

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been muted for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ You are muted, <time> left. Reason: <message>`

Сообщение для игрока

