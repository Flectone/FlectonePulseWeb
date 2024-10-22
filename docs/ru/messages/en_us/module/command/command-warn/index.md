# Комманда /warn
Путь `messages > en_us.yml > module.command.warn`

## Пояснение
Сообщения для комманды `/warn`
![command warn](/commandwarn.png)

## Редактирование
```yaml
<en_us.module.command.warn>
```

### По умолчанию
```yaml
command-warn:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  global: "<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You are warned, <time> left. Reason: <message>"
  reason:
    default: "You have been warned on this server"
```

## Параметры

- Конфигурация происходит тут [Warn](/ru/config/module/command/command-warn/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ You are warned, <time> left. Reason: <message>`

Сообщение для игрока

### `reason`
- По умолчанию
```yaml
default: "You have been warned on this server"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/warn player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

