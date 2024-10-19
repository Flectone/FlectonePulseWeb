# Name
Path `config.yml > module.player.name.*`

## Explanation
Module for player's name
![name tab](/nametab.png)
![name display](/namedisplay.png)

## Edit
```yaml
<config.module.player.name>
```

### Default
```yaml
name:
  enable: true
  display: "<prefix><fcolor:2><player></fcolor><suffix>"
  permission:
    name: "flectonepulse.module.player.name"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module and its children

### `permission`
- Name `flectonepulse.module.player.name`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module