# Комманда /mail
Путь `messages > en_us.yml > module.command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<en_us.module.command.mail>
```

### По умолчанию
```yaml
mail:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  sender: "<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/commands/module/command/mail/)
- [Права](/ru/permissions/module/command/mail/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Mail #<id> for <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Mail from <display_name> » <fcolor:1><message>`

Сообщение для получателя

