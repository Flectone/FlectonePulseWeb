# Bold
Path `config.yml > module.player.message.format.bold`

## Explanation
This formatting makes the text **bold** between two `**`
![bold](/bold.png)

## Edit
```yaml
<config.module.player.message.format.bold>
```

### Default
```yaml
bold:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.bold"
    type: TRUE
  trigger: "\\Q**\\E"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.bold`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q**\\E`

Characters between which the message must be enclosed