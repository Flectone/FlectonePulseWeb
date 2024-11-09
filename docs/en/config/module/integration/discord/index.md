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
  presence:
    enable: true
    status: "ONLINE"
    activity:
      enable: true
      type: "PLAYING"
      name: "FlectonePulse"
      url: "https://flectone.net/pulse/"
  channel-info:
    enable: true
    ticker:
      enable: true
      period: 1200
  message-channel:
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

### `presence`

![discord presence](/discordpresence.png)

::: details Presence setting
#### `enable`
- Default `true`

Enables or disables custom presence

#### `status`
- Default `ONLINE`

Status type

| Type             | Description                |
|------------------|----------------------------|
| `UNKNOWN`        | -                          |
| `ONLINE`         | Online                     |
| `DO_NOT_DISTURB` | Online with do not disturb |
| `IDLE`           | Online, but idle           |
| `INVISIBLE`      | Invisible                  |
| `OFFLINE`        | Offline                    |

#### `activity`

Bot activity in Discord

##### `enable`
- Default `true`

Enables or disables activity

##### `type`
- Default `PLAYING`

Activity type

| Type        | Description |
|-------------|-------------|
| `UNKNOWN`   | -           |
| `STREAMING` | Streaming   |
| `LISTENING` | Listening   |
| `WATCHING`  | Watching    |
| `CUSTOM`    | -           |
| `COMPETING` | Competing   |

##### `name`
- Default `FlectonePulse`

Activity name

##### `url`
- Default `https://flectone.net/pulse/`

Activity url

:::


### `channel-info`

![discord channel info](/discordchannelinfo.png)

::: details Channel info setting
#### `enable`
- Default `true`

### `ticker`
- `enable: true`

Whether message needs to be updated once every certain period of time

- `period: 1200`

How often in [ticks](https://minecraft.wiki/w/Tick) needs to be updated

:::

### `message-channel`

List of [message types](#message-types) and [channel IDs](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) in Discord

::: tip For example, I want Minecraft to send a message to Discord
1. I copy the channel ID in discord `1286666844358316083`
2. I write `CHAT: “1286666844358316083”`

```yaml
message-channel:
  CHAT: "1286666844358316083" // [!code highlight]
```
:::

<!--@include: @/en/parts/messagetag.md-->

