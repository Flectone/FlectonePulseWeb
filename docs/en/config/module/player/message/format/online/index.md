# Online
Path `config.yml > module.player.message.format.online`

## Explanation
This formatting replaces `%online%` in any message with the number of server players
![online](/online.png)

## Edit
```yaml
<config.module.player.message.format.online>
```

### Default
```yaml
online:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.online"
    type: TRUE
  trigger: "%online%"
```

## Options

- Format of the message is changed here [Online](/en/messages/en_us/module/player/message/online/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.online`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%online%`

Message to be replaced