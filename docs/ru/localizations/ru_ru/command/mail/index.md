# Комманда /mail
Путь `localizations > ru_ru.yml > command.mail`

## Пояснение
Сообщения для комманды `/mail`
![command mail](/commandmail.png)

## Редактирование
```yaml
<ru_ru.command.mail>
```

### По умолчанию
```yaml
mail:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/command/mail/)
- [Права](/ru/permission/command/mail/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Письмо #<id> для <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ Письмо от <display_name> » <fcolor:1><message>`

Сообщение для получателя

