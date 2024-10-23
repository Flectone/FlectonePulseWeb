# Telegram
Path `config.yml > module.integration.telegram`

## Explanation
Telegram integration allows you to send messages:
- from Minecraft to Telegram
- from Telegram to Minecraft

![telegram message 1](/telegrammessage1.png)
![telegram message 2](/telegrammessage2.png)
![minecraft message](/telegramminecraftmessage.png)


## Edit
```yaml
<config.module.integration.telegram>
```

### Default
```yaml
telegram:
  enable: false
  channel:
    CHAT: []
    FROM_TELEGRAM_TO_MINECRAFT: []
```

## Options

- The final format of message is changed here [Telegram](/en/messages/en_us/module/integration/telegram/)

### `enable`
- Default `false`

::: warning Important
- Before enabling, insert the **token** of the Telegram bot in [secrets](/en/secrets/telegram/)
- After enabling, **MUST** restart the server
:::

Enables or disables the functionality of the module

### `channel`

List of [message types](#message-types) and chat IDs

::: tip For example, I want Minecraft to send a message to Telegram
1. I copy ID of chat to send a message to (`-1002341720267_49`)
![telegram id](/telegramid.png)
2. Writing:
```yaml
channel:
  CHAT:
    - "-1002341720267_49" // [!code highlight]
```

You can have as many chats, as bot can access them from [secrets](/en/secrets/telegram/)
:::

::: danger If your channel is a Forum (Topic)

ID of **Main** channel should be without `_`

1. ID of my main channel (it always ends in `_1`) is `-1002341720267_1`
2. Put in **ONLY** `-1002341720267`

For other chats from channel, this rule does not apply and you must enter **full ID**

:::

<!--@include: @/en/parts/messagetag.md-->

