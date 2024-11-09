# Telegram
Path `messages > ru_ru.yml > module.integration.telegram`

## Explanation
Messages integration with Telegram
![telegrammessage](/telegrammessage.png)

## Edit
```yaml
<ru_ru.module.integration.telegram>
```

### Default
```yaml
telegram:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  message-channel:
    CHAT: "<final_message>"
```

## Options

- Configuration is here [Telegram](/en/config/module/integration/telegram/)

### Плейсхолдеры

You can use all the placeholders that are used in the initial message for minecraft
::: tip For example for ban message
There's a `<reason>` placeholder, so I can use `<reason>` inside Telegram messages
:::

There are also placeholders that are REALLY going to be replaced in any message
- `<final_message>` the message sent to minecraft
- `<player>` the nickname of the player who sent the message

All placeholders from `PlaceholderAPI` and `FlectonePulse` will work too

### `for-minecraft`
- Default `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Format of the message that will be sent from Telegram to Minecraft

### `message-channel`

List of [messages](#message-types) with the format of the final message

::: tip If you want to add another message:
1. Take title from [list](#message-types)
2. Insert in `message-channel`
```yaml
message_name: "<final_message>"
```
:::

<!--@include: @/en/parts/messagetag.md-->
