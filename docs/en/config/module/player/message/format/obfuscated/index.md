# Obfuscated
Path `config.yml > module.player.message.format.obfuscated`

## Explanation
This formatting makes the text unreadable between the two `??`
![obfuscated](/obfuscated.png)

## Edit
```yaml
<config.module.player.message.format.obfuscated>
```

### Default
```yaml
obfuscated:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.obfuscated"
    type: TRUE
  trigger: "\\Q??\\E"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.obfuscated`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q??\\E`

Characters between which the message must be enclosed