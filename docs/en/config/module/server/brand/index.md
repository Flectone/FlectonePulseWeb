# Brand
Path `config.yml > module.server.brand`

## Explanation
Module for brand message in F3
![brand](/brand.png)

## Edit
```yaml
<config.module.server.brand>
```

### Default
```yaml
brand:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.brand"
    type: TRUE
  ticker:
    enable: true
    period: 100
```

## Options

- Messages are changed here [Brand](/en/messages/en_us/module/server/brand/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `random`
- Default `true`

If enabled, brand message will be selected randomly, otherwise in order

### `permission`
- Name `flectonepulse.module.server.brand`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `ticker`
- `enable: true`

Does brand need to be sent once every certain period of time

- `period: 100`

How often in [ticks](https://minecraft.wiki/w/Tick) needs to be updated