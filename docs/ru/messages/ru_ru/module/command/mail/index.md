# Комманда /mail
Путь `messages > ru_ru.yml > module.command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<ru_ru.module.command.mail>
```

### По умолчанию
```yaml
mail:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/commands/module/command/mail/)
- [Права](/ru/permissions/module/command/mail/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>`

Сообщение для получателя

