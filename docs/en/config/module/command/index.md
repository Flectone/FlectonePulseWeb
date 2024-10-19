# Commands
Path `config.yml > module.command.*`

## Explanation
A command is something that a player can use with a `/`
![command me](/commandme.png)

## Edit
```yaml
<config.module.command>
```

### Default
```yaml
command:
  enable: true
  permission:
    name: "flectonepulse.module.command"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module and its children

### `permission`
- Name `flectonepulse.module.command`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module