# Chat
Path `messages > en_us.yml > module.player.message.chat`

## Explanation
Messages when a player uses chat

## Edit
```yaml
<en_us.module.player.message.chat>
```

### Default
```yaml
chat:
  null-chat: "<color:#ff7171><b>⁉</b> Chat is disabled on this server"
  null-recipient: "<color:#ff7171><b>⁉</b> Nobody heard you"
  type:
    global: "<display_name> <world_prefix>»<fcolor:4> <message>"
    local: "<fcolor:2><display_name>:<fcolor:3> <message>"
```

## Options

- Configuration is here [Chat](/en/config/module/player/message/chat/)

### `null-chat`
- Default `<color:#ff7171><b>⁉</b> Chat is disabled on this server`

Message if chat empty or disabled

### `null-recipient`
- Default `<color:#ff7171><b>⁉</b> Nobody heard you`

Message if no one has seen a player's message

### `type`
- Default
```yaml
global: "<display_name> <world_prefix>»<fcolor:4> <message>"
local: "<fcolor:2><display_name>:<fcolor:3> <message>"
```

List of chats and their format