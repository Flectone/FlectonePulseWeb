# Комманда /tell
Путь `localizations > en_us.yml > command.tell`

## Пояснение
Сообщения для комманды `/tell`
![command tell](/commandtell.png)

## Редактирование
```yaml
<en_us.command.tell>
```

### По умолчанию
```yaml
tell:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  sender: "<fcolor:2>✉ You → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → You » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Note] <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/command/tell/)
- [Права](/ru/permission/command/tell/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ You → <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ <display_name> → You » <fcolor:1><message>`

Сообщение для получателя

### `myself`
- По умолчанию `<fcolor:2>✉ [Note] <fcolor:1><message>`

Сообщение для отправителя, если он и есть получатель т.е. для себя


