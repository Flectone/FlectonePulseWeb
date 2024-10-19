# World
Path `config.yml > module.player.world`

## Explanation
The module for `<world_prefix>` tag
![world tab](/worldtab.png)
![world chat](/worldchat.png)

## Edit
```yaml
<config.module.player.world>
```

### Default
```yaml
world:
  enable: true
  mode: TYPE
  permission:
    name: "flectonepulse.module.player.world"
    type: TRUE
  type:
    normal: "<color:#98FB98>"
    nether: "<color:#F08080>"
    the_end: "<color:#9370DB>"
    custom: "<color:#98FB98>"
  name:
    world: "<color:#98FB98>"
    world_nether: "<color:#F08080>"
    world_the_end: "<color:#9370DB>"
  listener:
    PlayerChangedWorldEvent: HIGHEST
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `mode`
- Default `TYPE`

World definition mode from [available](#definition-modes)

### `type`
- Default:
```yaml
type:
  normal: "<color:#98FB98>"
  nether: "<color:#F08080>"
  the_end: "<color:#9370DB>"
  custom: "<color:#98FB98>"
```

List of worlds and their `<world_prefix>` if `mode: TYPE`

### `name`
```yaml
name:
  world: "<color:#98FB98>"
  world_nether: "<color:#F08080>"
  world_the_end: "<color:#9370DB>"
```

List of worlds and their `<world_prefix>` if `mode: NAME`

### `permission`
- Name `flectonepulse.module.player`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
PlayerChangedWorldEvent: HIGHEST
```

List of event listeners and their [priority](#event-priority)

## Definition modes
| Mode   | Description                                                                 |
|--------|-----------------------------------------------------------------------------|
| `TYPE` | A world is defined by the name of its type, e.g. a normal world is `normal` |
| `NAME` | A world is defined by the name of its folder                                |

<!--@include: @/en/parts/listener.md-->