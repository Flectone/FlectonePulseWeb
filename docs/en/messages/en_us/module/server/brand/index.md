# Brand
Path `messages > en_us.yml > module.server.brand`

## Explanation
Server brand messages
![brand](/brand.png)

## Edit
```yaml
<en_us.module.server.brand>
```

### Default
```yaml
brand:
  format:
    - "<white>FlectonePulse"
    - "<aqua>FlectonePulse"
```

## Options

- Configuration is here [Brand](/en/config/module/server/brand/)

### `format`
- Default:
```yaml
- "<white>FlectonePulse"
- "<aqua>FlectonePulse"
```

Brand message list

:::: warning Important
Only [normal colors](#available-colors) can be inserted into the message
:::

<!--@include: @/en/parts/color.md-->

