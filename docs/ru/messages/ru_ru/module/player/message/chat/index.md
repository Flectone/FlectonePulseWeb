# Чат
Путь `messages > ru_ru.yml > module.player.message.chat`

## Пояснение
Сообщения при использовании чата игроком

## Редактирование
```yaml
<ru_ru.module.player.message.chat>
```

### По умолчанию
```yaml
chat:
  null-chat: "<color:#ff7171><b>⁉</b> На сервер выключен чат"
  null-recipient: "<color:#ff7171><b>⁉</b> Тебя никто не услышал"
  types:
    global: "<display_name> <world_prefix>»<fcolor:4> <message>"
    local: "<display_name><fcolor:3>: <message>"
```

## Параметры

- [Конфиг](/ru/config/module/player/message/chat/)
- [Права](/ru/permissions/module/player/message/chat/)

### `null-chat`
- По умолчанию `<color:#ff7171><b>⁉</b> На сервер выключен чат`

Сообщение, если в чат ничего не удалось отправить

### `null-recipient`
- По умолчанию `<color:#ff7171><b>⁉</b> Тебя никто не услышал`

Сообщение, если никто не увидел сообщение игрока

### `types`
- По умолчанию
```yaml
global: "<display_name> <world_prefix>»<fcolor:4> <message>"
local: "<fcolor:2><display_name><fcolor:3>: <message>"
```

Список чатов и их формат