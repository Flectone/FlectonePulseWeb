# Integrations
Path `config.yml > module.integration.*`

## Explanation
Integration is the ability to work with a technology that is optional for a plugin

Why it's needed
- For more functionality and usability of the plugin
- To fix incompatibilities between plugin and technology

## Edit
```yaml
<config.module.integration>
```

### Default
```yaml
integration:
  enable: true
  permission:
    name: "flectonepulse.module.integration"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module and its children

### `permission`
- Name `flectonepulse.module.integration`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module