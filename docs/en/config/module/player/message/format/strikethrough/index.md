# Strikethrough
Path `config.yml > module.player.message.format.strikethrough`

## Explanation
This formatting makes text strikethrough between the two `~~~`
![strikethrough](/strikethrough.png)

## Edit
```yaml
<config.module.player.message.format.strikethrough>
```

### Default
```yaml
strikethrough:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.strikethrough"
    type: TRUE
  trigger: "\\Q~~\\E"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.strikethrough`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q~~\\E`

Characters between which the message must be enclosed