# Discord
Path `config.yml > module.integration.discord`

## Explanation
Discord integration allows you to send messages:
- from Minecraft to Discord
- from Discord to Minecraft

![discord message](/discordmessage.png)
![minecraft message](/discordminecraftmessage.png)


## Edit
```yaml
<config.module.integration.discord>
```

### Default
```yaml
discord:
  enable: false
  channel:
    FROM_DISCORD_TO_MINECRAFT: ""
    CHAT: ""
```

## Options

- The final message format is changed here [Discord](/en/messages/en_us/module/integration/discord/)

### `enable`
- Default `false`

::: warning Important
- Before enabling, insert the **token** of Discord bot in [secrets](/en/secrets/discord/)
- After enabling, **MUST** restart server
:::

Enables or disables the functionality of the module

### `channel`

List of [message types](#message-types) and [channel IDs](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) in Discord

::: tip For example, I want Minecraft to send a message to Discord
1. I copy the channel ID in discord `1286666844358316083`
2. I write `CHAT: “1286666844358316083”`

```yaml
channel:
  CHAT: "1286666844358316083" // [!code highlight]
```
:::

<!--@include: @/en/parts/messagetag.md-->

