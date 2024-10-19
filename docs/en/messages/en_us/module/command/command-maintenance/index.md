# Command /maintenance
Path `messages > en_us.yml > module.command.maintenace`

## Explanation
Messages for `/maintenance` command
![command maintenance](/commandmaintenance.png)

## Edit
```yaml
<en_us.module.command.maintenance>
```

### Defult
```yaml
command-maintenance:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  not: "<color:#ff7171><b>⁉</b> You have not maintenance"
  already: "<color:#ff7171><b>⁉</b> You have already maintenance"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAINTENANCE</u> in <time>"
  motd: "<color:#ff7171>The server is under maintenance"
  kick: "<color:#ff7171>★ The server is under maintenance"
  on: "<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server"
  off: "<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server"
```

## Options

- Configuration is here [Maintenance](/en/config/module/command/command-maintenance/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `not`
- Default `<color:#ff7171><b>⁉</b> You have not maintenance`

Message when attempting to disable if not enabled

### `already`
- Default `<color:#ff7171><b>⁉</b> You have already maintenance`

Message when attempting to enable if enabled

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAINTENANCE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `motd`
- Default `<color:#ff7171>The server is under maintenance`

Welcome message if maintenance is enabled

### `kick`
- Default `<color:#ff7171>★ The server is under maintenance`

Reason for kick from server

### `on`
- Default `<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server`

Message when maintenance is switched on

### `off`
- Default `<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server`

Message when maintenance is switched off