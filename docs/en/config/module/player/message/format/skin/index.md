# Skin
Path `config.yml > module.player.message.format.skin`

## Explanation
This formatting replaces `%skin%` with the sender's skin in any message
![skin](/skin.png)

## Edit
```yaml
<config.module.player.message.format.skin>
```

### Default
```yaml
skin:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.skin"
    type: TRUE
  trigger: "%skin%"
```

## Options

- Format of the message is changed here [Skin](/en/messages/en_us/module/player/message/skin/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.skin`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%skin%`

Message to be replaced