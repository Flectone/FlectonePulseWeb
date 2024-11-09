# Discord
Path `messages > en_us.yml > module.integration.discord`

## Explanation
Messages integration with Discord
![discordmessage](/discordmessage.png)

## Edit
```yaml
<en_us.module.integration.discord>
```

### Default
```yaml
discord:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  channel-info:
    id: "TPS <tps>"
  message-channel:
    CHAT:
      content: "<final_message>"
      webhook:
        enable: false
        avatar: "https://mc-heads.net/avatar/<skin>/32.png"
        content: "<message>"
      embed:
        enable: false
        color: ""
        title: ""
        url: ""
        author:
          name: ""
          url: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
        description: ""
        thumbnail: ""
        fields:
          - name: ""
            value: ""
            inline: false
        image: ""
        timestamp: true
        footer:
          text: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```

## Options

- Configuration is here [Discord](/en/config/module/integration/discord/)

### Placeholders

You can use all the placeholders that are used in the initial message for minecraft
::: tip For example for ban message
There's a `<reason>` placeholder, so I can use `<reason>` inside Discord messages
:::

There are also placeholders that are REALLY going to be replaced in any message
- `<final_message>` the message sent to minecraft
- `<player>` the nickname of the player who sent the message

All placeholders from `PlaceholderAPI` and `FlectonePulse` will work too

### `for-minecraft`
- Default `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Format of the message that will be sent from Discord to Minecraft

### `channel-info`
- Default
```yaml
id: "TPS <tps>"
```

List of channel ids and their names

### `message-channel`

List of [messages](#message-types)

::: details Setting message

![discord](https://docs.discord4j.com/img/embed-preview.png)

If option is empty, it will not be used in the final message

#### `content`

The content of a message on behalf of a discord bot
![discord content](/discordcontent.png)

#### `webhook`

Discord webhook
![discord webhook](/discordwebhook.png)


##### `enable`

If enabled, the message will be a webhook

##### `avatar`

Url to create a player avatar. If you change it to your own, url must contain `<skin>`

##### `content`

Content of the webhook message

#### `embed`

Discord embed message
![discord embed](/discordembed.png)

##### `enable`

If enabled, the message will contain `embed`

##### `color`

`embeded` color of message

##### `title`

Title `embed` of message

##### `url`

Url for `embed` message

##### `author`

Author `embed` message

###### `name`

Author's name `embed` message

###### `url`

Url to author of `embed` message

###### `icon-url`

Url to the avatar of the author of the `embedded` post. If you change it to your own, url must contain `<skin>`

##### `description`

Description of `embed` message

##### `thumbnail`

A small image inside an `embeded` message

##### `fields`

List of fields inside `embed` of message

###### `name`

Name of field inside `embed` of message

###### `value`

Value of field inside `embed` of message

###### `inline`

If enabled, the field will be arranged in a column with other fields

##### `image`

Main image `embed` the message

##### `timestamp`

If enabled, `embed` message will include creation time

##### `footer`

Footer part of `embed` message

###### `text`

Text at footer of `embed` message

###### `icon-url`

Image at footer of `embed` message

:::

::: tip If you want to add another message:
1. Take the title from [list](#message-types)
2. Insert it into `message-channel`
```yaml
message_name:
  content: ""
  webhook:
    enable: false
    avatar: "https://mc-heads.net/avatar/<skin>/32.png"
    content: ""
  embed:
    enable: false
    color: ""
    title: ""
    url: ""
    author:
      name: ""
      url: ""
      icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
    description: ""
    thumbnail: ""
    fields:
      - name: ""
        value: ""
        inline: false
    image: ""
    timestamp: true
    footer:
      text: ""
      icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```
:::

<!--@include: @/en/parts/messagetag.md-->
