# Chat
Path `config.yml > module.player.message.chat`

## Explanation
Module responsible for messages sent by a player to the chat room

## Edit
```yaml
<config.module.player.message.chat>
```

### Default
```yaml
chat:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.chat"
    type: TRUE
  type:
    local:
      enable: true
      range: 100
      priority: 0
      null-recipient: true
      cancel: true
      trigger: ""
      permission:
        name: "flectonepulse.module.player.message.chat.local"
        type: TRUE
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.player.message.chat.local.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.player.message.chat.local.sound"
          type: TRUE
    global:
      enable: true
      range: -2
      priority: 5
      null-recipient: true
      cancel: false
      trigger: "!"
      permission:
        name: "flectonepulse.module.player.message.chat.global"
        type: TRUE
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.player.message.chat.global.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.player.message.chat.global.sound"
          type: TRUE
listener:
  AsyncPlayerChatEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.chat`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `type`

List of all chats with their [customization](#chat-customization), you can add yours

### `listener`
- Default:
```yaml
AsyncPlayerChatEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

## Chat customization

- Message format is changed here [Chat](/en/messages/en_us/module/player/message/chat/)

Any chat by default looks like this

```yaml
название_чата:
  enable: true
  range: число
  priority: число
  null-recipient: true
  cancel: true
  trigger: "триггер"
  permission:
    name: "flectonepulse.module.player.message.chat.название_чата"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.player.message.chat.название_чата.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.player.message.chat.название_чата.sound"
      type: TRUE
```

### `enable`

Enables chat functionality

### `range`

[Range](#range-types) how far into the blocks the message will be displayed


### `priority`

Chat priority, which is used to select when multiple chats have the same `trigger`. The one with the higher priority is selected

::: tip For example, there are chats
```yaml
admin:
  priority: 20
  trigger: "!" // [!code highlight]
helper:
  priority: 10
  trigger: "!" // [!code highlight]
```

If a player has permission to both chats, the plugin will choose `admin` as it has more `priority`
:::

### `null-recipient`

- Message changes here [Chat](/en/messages/en_us/module/player/message/chat/)

Enables a message that the sent message has not been seen by anyone
![null recipient](/nullrecipient.png)

### `cancel`

- If `true`, the chat message event is canceled for other plugins

- If you want another plugin related to chat to work, you should set `false`.
::: tip For example, the default chat `global` has `cancel: false`.
So that global messages are also handled by other plugins (like DiscordSRV, InteractiveChat, etc.)
:::
::: warning  If `false`, it causes a duplicate message to be sent to the console
![chat console](/chatconsole.png)
:::

### `trigger`

Message at which the sent message for [type](#type) chat should begin

::: tip Value of `trigger` can be anything:
- `!`, `admin`, `.f`, etc.
- empty, i.e. `trigger: “”`, then any message is suitable for this [type](#type) chat.
:::

In final message, `trigger` is removed, i.e. if a player sent `!hello`, the final message will be `hello` without `!`

### `permission`

[Permission](/en/config/module/#explanation) to use chat

### `cooldown`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`

Turns on sound playback when using

::: details Sound setting
#### `type`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and pitch (`1`) of the sound via `:`

#### `permission`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/listener.md-->
<!--@include: @/en/parts/range.md-->
