# Item
Path `config.yml > module.player.message.format.item`

## Explanation
This formatting replaces `%item%` in any message with the item the sender is holding in main or second hand
![item](/item.png)

## Edit
```yaml
<config.module.player.message.format.item>
```

### Default
```yaml
item:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.item"
    type: TRUE
  trigger: "%item%"
```

## Options

- Format of the message is changed here [Item](/en/messages/en_us/module/player/message/item/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.item`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `%item%`

Message to be replaced