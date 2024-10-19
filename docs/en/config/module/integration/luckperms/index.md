# LuckPerms
Path `config.yml > module.integration.luckperms`

## Explanation
Integration with LuckPerms allows you to:
- Check the rights of **offline players**
- Sort players in TAB by [group weight](https://luckperms.net/wiki/Weight)

## Edit
```yaml
<config.module.integration.luckperms>
```

### Default
```yaml
luckperms:
  enable: true
  sort: true
  group: {}
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `sort`
- Default `true`

Enables or disables sorting in TAB by [group weight](https://luckperms.net/wiki/Weight)

