# Caps
Path `config.yml > module.player.message.format.caps`

## Explanation
This formatting removes caps in message
![caps](/caps.png)

## Edit
```yaml
<config.module.player.message.format.caps>
```

### Default
```yaml
caps:
  enable: true
  trigger: 0.7
  permission:
    name: "flectonepulse.module.player.message.format.caps"
    type: TRUE
  permission-ignore:
    name: "flectonepulse.module.player.message.format.caps.ignore"
    type: OP
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `trigger`
- Default `0.7`

Percentage of letters that must be in uppercase for message to be changed

::: tip How to write a percentage correctly
`0.7` is `70%`

`1.0` is `100%` i.e. all message
:::

### `permission`
- Name `flectonepulse.module.player.message.format.caps`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `permission-ignore`
- Name `flectonepulse.module.player.message.format.caps.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore check