# Чат
Путь `localizations > en_us.yml > message.chat`

## Пояснение
Сообщения при использовании чата игроком

## Редактирование
```yaml
<en_us.message.chat>
```

### По умолчанию
```yaml
chat:
  null-chat: "<color:#ff7171><b>⁉</b> Chat is disabled on this server"
  null-recipient: "<color:#ff7171><b>⁉</b> Nobody heard you"
  types:
    global: "<display_name> <world_prefix>»<fcolor:4> <message>"
    local: "<display_name><fcolor:3>: <message>"
```

## Параметры

- [Сообщения](/ru/message/chat/)
- [Права](/ru/permission/message/chat/)

### `null-chat`
- По умолчанию `<color:#ff7171><b>⁉</b> Chat is disabled on this server`

Сообщение, если в чат ничего не удалось отправить

### `null-recipient`
- По умолчанию `<color:#ff7171><b>⁉</b> Nobody heard you`

Сообщение, если никто не увидел сообщение игрока

### `types`
- По умолчанию
```yaml
global: "<display_name> <world_prefix>»<fcolor:4> <message>"
local: "<display_name><fcolor:3>: <message>"
```

Список чатов и их формат