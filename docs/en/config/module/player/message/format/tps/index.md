# TPS
Path `config.yml > module.player.message.format.tps`

## Explanation
This formatting replaces `%tps%` in any message with the server's TPS
![tps](/tps.png)

## Edit
```yaml
<config.module.player.message.format.tps>
```

### Default
```yaml
tps:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.tps"
    type: TRUE
  trigger: "%tps%"
```

## Options

- Format of message is changed here [TPS](/en/messages/en_us/module/player/message/tps/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.tps`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%tps%`

Message to be replaced