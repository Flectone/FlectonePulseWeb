# Hover
Path `config.yml > module.player.name.hover`

## Explanation
Module for the message when hovering over a player's name
![hover](/hover.png)

## Edit
```yaml
<config.module.player.name.hover>
```

### Default
```yaml
hover:
  enable: true
  clickable: true
  permission:
    name: "flectonepulse.module.player.name.hover"
    type: TRUE
```

## Options

- Format of message is changed here [When hovering](/en/messages/en_us/module/player/message/name/hover/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `clickable`
- Default `true`

If enabled, `/tell player` command will be inserted when clicking on player's nickname
![hover click](/hoverclick.png)

### `permission`
- Name `flectonepulse.module.player.name.hover`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module