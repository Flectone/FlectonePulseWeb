# Stats
Path `config.yml > module.player.message.format.stats`

## Explanation
This formatting replaces `%stats%` in any message with the sender's statistics
![stats](/stats.png)

## Edit
```yaml
<config.module.player.message.format.stats>
```

### Default
```yaml
stats:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.stats"
    type: TRUE
  trigger: "%stats%"
```

## Options

- Format of the message is changed here [Statistics](/en/messages/en_us/module/player/message/stats/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.stats`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%stats%`

Message to be replaced