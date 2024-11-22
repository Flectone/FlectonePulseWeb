# Комманда /tell
Путь `messages > ru_ru.yml > module.command.tell`

## Пояснение
Сообщения для комманды `/tell`
![command tell](/commandtell.png)

## Редактирование
```yaml
<ru_ru.module.command.tell>
```

### По умолчанию
```yaml
tell:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Заметка] <fcolor:1><message>"
```

## Параметры

- [Комманда](/ru/commands/module/command/tell/)
- [Права](/ru/permissions/module/command/tell/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `sender`
- По умолчанию `<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>`

Сообщение для отправителя

### `receiver`
- По умолчанию `<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>`

Сообщение для получателя

### `myself`
- По умолчанию `<fcolor:2>✉ [Заметка] <fcolor:1><message>`

Сообщение для отправителя, если он и есть получатель т.е. для себя


