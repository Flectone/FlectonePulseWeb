# Комманда /chatcolor
Путь `messages > ru_ru.yml > module.command.chatcolor`

## Пояснение
Сообщения для комманды `/chatcolor`
![command chatcolor](/commandchatcolor.png)

## Редактирование
```yaml
<ru_ru.module.command.chatcolor>
```

### По умолчанию
```yaml
command-chatcolor:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATCOLOR</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  incorrect: "<color:#ff7171><b>⁉</b> Цвета введены неверно"
  format: "<color:#98FB98>★ Теперь цвета <fcolor:1>сообщение</fcolor> <fcolor:2>сообщение</fcolor> <fcolor:3>сообщение <fcolor:4>сообщение"
```

## Параметры

- Конфигурация происходит тут [Chatcolor](/ru/config/module/command/command-chatcolor/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATCOLOR</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `incorrect`
- По умолчанию `<color:#ff7171><b>⁉</b> Цвета введены неверно`

Сообщение, если неправильно введены цвета

### `format`
- По умолчанию `<color:#98FB98>★ Теперь цвета <fcolor:1>сообщение</fcolor> <fcolor:2>сообщение</fcolor> <fcolor:3>сообщение <fcolor:4>сообщение`

Формат сообщения, которое будет отправлено

