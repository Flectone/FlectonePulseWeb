# Chat
Path `messages > ru_ru.yml > module.player.message.chat`

## Explanation
Messages when a player uses chat

## Edit
```yaml
<ru_ru.module.player.message.chat>
```

### Default
```yaml
chat:
  null-chat: "<color:#ff7171><b>⁉</b> На сервер выключен чат"
  null-recipient: "<color:#ff7171><b>⁉</b> Тебя никто не услышал"
  type:
    global: "<display_name> <world_prefix>»<fcolor:4> <message>"
    local: "<fcolor:2><display_name><fcolor:3>: <message>"
```

## Options

- Configuration is here [Chat](/en/config/module/player/message/chat/)

### `null-chat`
- Default `<color:#ff7171><b>⁉</b> На сервер выключен чат`

Message if chat empty or disabled

### `null-recipient`
- Default `<color:#ff7171><b>⁉</b> Тебя никто не услышал`

Message if no one has seen a player's message

### `type`
- Default
```yaml
global: "<display_name> <world_prefix>»<fcolor:4> <message>"
local: "<fcolor:2><display_name>:<fcolor:3> <message>"
```

List of chats and their format