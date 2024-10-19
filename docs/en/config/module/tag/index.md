# Tags
Path `config.yml > module.tag.*`

## Explanation
Tags are something that can be used anywhere in the plugin, like placeholders

::: tip For example, there is a tag
```yaml
house:
  enable: true
```
So I can use `<house>` in [messages](/en/messages/)
:::

## Edit
```yaml
<config.module.tag>
```

### Default
```yaml
tag:
  enable: true
  permission:
    name: "flectonepulse.module.tag"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module and its children

### `permission`
- Name `flectonepulse.module.tag`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module