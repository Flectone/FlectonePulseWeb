# Italic
Path `config.yml > module.player.message.format.italic`

## Explanation
This formatting makes the text _cursive_ between two `##`
![italic](/italic.png)

## Edit
```yaml
<config.module.player.message.format.italic>
```

### Default
```yaml
italic:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.italic"
    type: TRUE
  trigger: "\\Q##\\E"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.italic`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `\\Q##\\E`

Characters between which the message must be enclosed