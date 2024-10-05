# Комманда /maintenance
Путь `messages > en_us.yml > module.command.maintenace`

## Пояснение
Сообщения для комманды `/maintenance`
![command maintenance](/commandmaintenance.png)

## Редактирование
```yaml
<en_us.module.command.maintenance>
```

### По умолчанию
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

## Параметры

- Конфигурация происходит тут [Maintenance](/ru/config/module/command/command-maintenance/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> You have not maintenance`

Сообщение при попытке отключения технических работ, если они не включены

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You have already maintenance`

Сообщение при попытке включения технических работ, если они включены

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MAINTENANCE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `motd`
- По умолчанию `<color:#ff7171>The server is under maintenance`

Сообщения при просмотре сервера, если включены технические работы

### `kick`
- По умолчанию `<color:#ff7171>★ The server is under maintenance`

Причина исключения с сервера при включении технических работ

### `on`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server`

Сообщение при включении технических работ

### `off`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server`

Сообщение при отключении технических работ