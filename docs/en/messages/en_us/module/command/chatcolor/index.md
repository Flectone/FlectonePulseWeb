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
chatcolor:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-color: "<color:#ff7171><b>⁉</b> Incorrect colors entered"
  format: "<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message"
```

## Параметры

- [Комманда](/en/commands/module/command/chatcolor/)
- [Права](/en/permissions/module/command/chatcolor/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-color`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect colors entered`

Сообщение, если неправильно введены цвета

### `format`
- По умолчанию `<color:#98FB98>★ You set <fcolor:1>message</fcolor> <fcolor:2>message</fcolor> <fcolor:3>message <fcolor:4>message`

Формат сообщения, которое будет отправлено

