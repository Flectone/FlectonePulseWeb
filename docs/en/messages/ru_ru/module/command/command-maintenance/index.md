# Command /maintenance
Path `messages > ru_ru.yml > module.command.maintenace`

## Explanation
Messages for `/maintenance` command
![command maintenance](/commandmaintenance.png)

## Edit
```yaml
<ru_ru.module.command.maintenance>
```

### Defult
```yaml
command-maintenance:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  not: "<color:#ff7171><b>⁉</b> Технические работы не идут"
  already: "<color:#ff7171><b>⁉</b> Технические работы уже идут"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAINTENANCE</u> через <time>"
  motd: "<color:#ff7171>В настоящее время проводятся технические работы"
  kick: "<color:#ff7171>★ На сервере ведутся технические работы"
  on: "<fcolor:1>★ Ты <fcolor:2>включил</fcolor:2> технические работы на сервере"
  off: "<fcolor:1>★ Ты <fcolor:2>выключил</fcolor:2> технические работы на сервере"
```

## Options

- Configuration is here [Maintenance](/en/config/module/command/command-maintenance/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `not`
- Default `<color:#ff7171><b>⁉</b> Технические работы не идут`

Message when attempting to disable if not enabled

### `already`
- Default `<color:#ff7171><b>⁉</b> Технические работы уже идут`

Message when attempting to enable if enabled

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MAINTENANCE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `motd`
- Default `<color:#ff7171>В настоящее время проводятся технические работы`

Welcome message if maintenance is enabled

### `kick`
- Default `<color:#ff7171>★ На сервере ведутся технические работы`

Reason for kick from server

### `on`
- Default `<fcolor:1>★ Ты <fcolor:2>включил</fcolor:2> технические работы на сервере`

Message when maintenance is switched on

### `off`
- Default `<fcolor:1>★ Ты <fcolor:2>выключил</fcolor:2> технические работы на сервере`

Message when maintenance is switched off