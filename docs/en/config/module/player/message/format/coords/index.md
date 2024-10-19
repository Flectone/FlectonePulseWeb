# Coords
Path `config.yml > module.player.message.format.coords`

## Explanation
This formatting replaces `%coords%` in any message with the sender's current coordinates
![coords](/coords.png)

## Edit
```yaml
<config.module.player.message.format.coords>
```

### Default
```yaml
coords:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.coords"
    type: TRUE
  trigger: "%coords%"
```

## Options

- Message format is changed here [Coordinates](/en/messages/en_us/module/player/message/coords/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.coords`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%coords%`

Message to be replaced