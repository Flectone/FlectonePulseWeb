# Spoiler
Path `config.yml > module.player.message.format.spoiler`

## Explanation
This formatting hides the message written between the two `||`
![spoiler](/spoiler.png)

## Edit
```yaml
<config.module.player.message.format.spoiler>
```

### Default
```yaml
spoiler:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.spoiler"
    type: TRUE
  trigger: "\\Q||\\E"
```

## Options

- Message and symbol are changed here [Spoiler](/en/messages/en_us/module/tag/spoiler/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.spoiler`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q||\\E`

Characters between which the message must be enclosed