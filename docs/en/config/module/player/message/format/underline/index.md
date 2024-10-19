# Underline
Path `config.yml > module.player.message.format.underline`

## Explanation
This formatting makes text underlined between the two `__`'s
![underline](/underline.png)

## Edit
```yaml
<config.module.player.message.format.underline>
```

### Default
```yaml
underline:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.underline"
    type: TRUE
  trigger: "\\Q__\\E"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.underline`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q__\\E`

Characters between which the message must be enclosed