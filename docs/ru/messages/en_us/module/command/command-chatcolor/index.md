# Комманда /chatcolor
Путь `messages > en_us.yml > module.command.chatcolor`

## Пояснение
Сообщения для комманды `/chatcolor`
![command chatcolor](/commandchatcolor.png)

## Редактирование
```yaml
<en_us.module.command.chatcolor>
```

### По умолчанию
```yaml
command-chatcolor:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATCOLOR</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  incorrect: "<color:#ff7171><b>⁉</b> Incorrect colors entered"
  format: "<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message"
```

## Параметры

- Конфигурация происходит тут [Chatcolor](/ru/config/module/command/command-chatcolor/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATCOLOR</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `incorrect`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect colors entered`

Сообщение, если неправильно введены цвета

### `format`
- По умолчанию `<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message`

Формат сообщения, которое будет отправлено

