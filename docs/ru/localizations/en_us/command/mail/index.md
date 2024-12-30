# Комманда /mail
Путь `localizations > en_us.yml > command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<en_us.command.mail>
```

### По умолчанию
```yaml
mail:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  sender: "<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/command/mail/)
- [Права](/ru/permission/command/mail/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>`

Сообщение для получателя

