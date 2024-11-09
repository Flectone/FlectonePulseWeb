# Twitch
Path `config.yml > module.integration.twitch`

## Explanation
Twitch integration allows you to send messages:
- send messages from Minecraft to Twitch
- send messages from Twitch to Minecraft
- follow of Twitch streams

![twitch message](/twitchmessage.png)
![minecraft message](/twitchminecraftmessage.png)


## Edit
```yaml
<config.module.integration.twitch>
```

### Default
```yaml
twitch:
  enable: false
  message-channel:
    CHAT: []
    FROM_TWITCH_TO_MINECRAFT: []
  follow-channel:
    channel_name:
      - "stream start twitch.tv"
```

## Options

- The final format of message is changed here [Twitch](/en/messages/en_us/module/integration/twitch/)

### `enable`
- Default `false`

::: warning Important
- Before enabling, insert the **token** and **ID of the Twitch client** in [secrets](/en/secrets/twitch/)
- After enabling, **MUST** restart the server
:::

Enables or disables the functionality of the module

### `message-channel`

List of [message types](#message-types) and channel names on Twitch

::: tip For example, I want Minecraft to send a message to Twitch
1. I copy the names of Twitch channels to send a message to (`faseri4ka`)
2. Writing:
```yaml
message-channel:
  CHAT:
    - "faseri4ka" // [!code highlight]
```

You can have as many channels, as the client can access them from [secrets](/en/secrets/twitch/)
:::

### `follow-channel`

List, where key is channel name and value is list of commands to be executed at stream startup

::: tip For example, I want to follow the start of `faseri4ka`'s stream and write `stream start https://twitch.tv/faseri4ka`
1. Copy channel name `faseri4ka`
2. Writing:
```yaml
follow-channel:
  faseri4ka:
    - "stream start https://twitch.tv/faseri4ka"
```

- Channels can be up to 10 at a time, as the client can access them from [secrets](/en/secrets/twitch/)
- Commands, when stream starts, can be as many and as many as you like
:::

<!--@include: @/en/parts/messagetag.md-->

