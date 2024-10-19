# Modules
Path `config.yml > module.*`

## Explanation
This category is the main customization of what happens in the game, and here's what you need to know:
- Each module has a parent (the one above it)

::: tip For example
```yaml
house:
  door:
  chair:
```

`house` is the parent of `door` and `chair`
:::

- Each module depends on the `enable` of its parent

::: tip For example
```yaml
house:
  enable: false // [!code highlight]
  door:
    enable: true
  chair:
    enable: true
```

`house` is off, so regardless of whether `door` and `chair` are on, they will also be off
:::

- Each module has a permission to be used with a base type:
1. `TRUE` - for any player
2. `FALSE` - only if issued with permissions plugins (e.g. LuckPerms)
3. `OP` - available to server operators
4. `NOT_OP` - only if issued with permissions plugins (e.g. LuckPerms)

::: tip For example
```yaml
house:
  permission:
    name: "plugin.house.use"
    type: TRUE
```
Here the `house` module has the `plugin.house.use` permission and its base type is `TRUE`
:::

## Edit
```yaml
<config.module>
```

### Default
```yaml
module:
  enable: true
  permission:
    name: "flectonepulse.module"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module and its children

### `permission`
- Name `flectonepulse.module`
- Type `TRUE`

[Permission](#explanation) to use the module