# Icon
Path `config.yml > module.server.icon`

## Explanation
Module for server image
![server icon](/servericon.png)

## Edit
```yaml
<config.module.server.icon>
```

### Default
```yaml
icon:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.icon"
    type: TRUE
  list:
    - "server-icon-1.png"
    - "server-icon-2.png"
  listener:
    ServerListPingEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `random`
- Default `true`

If enabled, the image will be selected randomly, otherwise in order

### `permission`
- Name `flectonepulse.module.server`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `list`

`server-icon-1.png` ![server icon 1](/server-icon-1.png) 


`server-icon-2.png` ![server icon 2](/server-icon-2.png)

List of image names to be displayed

::: danger Image must:
1. Be inside the `/FlectonePulse/icons/` folder. 2.
2. **SIZED** `64x64`.
:::

### `listener`
- Default:
```yaml
ServerListPingEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->