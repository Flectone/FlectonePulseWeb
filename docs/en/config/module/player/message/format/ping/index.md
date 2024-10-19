# Ping
Path `config.yml > module.player.message.format.ping`

## Explanation
This formatting replaces `%ping%` in any message with a sender ping
![ping](/ping.png)

## Edit
```yaml
<config.module.player.message.format.ping>
```

### Default
```yaml
ping:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.ping"
    type: TRUE
  trigger: "%ping%"
```

## Options

- Format of the message is changed here [Ping](/en/messages/en_us/module/player/message/ping/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.ping`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%ping%`

Message to be replaced