# Комманда /kick
Путь `messages > en_us.yml > module.command.kick`

## Пояснение
Сообщения для комманды `/kick`
![command kick](/commandkick.png)

## Редактирование
```yaml
<en_us.module.command.kick>
```

### По умолчанию
```yaml
command-kick:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (reason)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>KICK</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  default-reason: "Kicked by an operator"
  global: "<color:#ff7171><br>⏵ Player <target> was kicked <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You were kicked by <moderator> <br>Reason: <message>"
```

## Параметры

- Конфигурация происходит тут [Kick](/ru/config/module/command/command-kick/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player) (reason)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>KICK</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `default-reason`
- По умолчанию `Kicked by an operator`

Причина по умолчанию, если она не введена

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> was kicked <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ You were kicked by <moderator> <br>Reason: <message>`

Сообщение для игрока

