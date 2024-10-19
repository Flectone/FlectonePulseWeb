# Twitch
Path `messages > en_us.yml > module.integration.twitch`

## Explanation
Messages integration with Twitch
![twitchmessage](/twitchmessage.png)

## Edit
```yaml
<en_us.module.integration.twitch>
```

### Default
```yaml
twitch:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  channel:
    CHAT: "<final_message>"
```

## Options

- Configuration is here [Twitch](/en/config/module/integration/twitch/)

### Placeholders

You can use all the placeholders that are used in the initial message for minecraft
::: tip For example for ban message
There's a `<reason>` placeholder, so I can use `<reason>` inside Twitch messages
:::

There are also placeholders that are REALLY going to be replaced in any message
- `<final_message>` the message sent to minecraft
- `<player>` the nickname of the player who sent the message

All placeholders from `PlaceholderAPI` and `FlectonePulse` will work too

### `for-minecraft`
- Default `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Format of the message that will be sent from Twitch to Minecraft

### `channel`

List of [messages](#message-types) with the format of the final message

::: tip If you want to add another message:
1. Take title from [list](#message-types)
2. Insert in `channel`
```yaml
message_name: "<final_message>"
```
:::

<!--@include: @/en/parts/messagetag.md-->
