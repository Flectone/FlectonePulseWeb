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
maintenance:
  not: "<color:#ff7171><b>⁉</b> You have not maintenance"
  already: "<color:#ff7171><b>⁉</b> You have already maintenance"
  motd: "<color:#ff7171>The server is under maintenance"
  kick: "<color:#ff7171>★ The server is under maintenance"
  format-true: "<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server"
  format-false: "<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server"
```

## Параметры

- [Комманда](/en/commands/module/command/maintenance/)
- [Права](/en/permissions/module/command/maintenance/)

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> You have not maintenance`

Сообщение при попытке отключения технических работ, если они не включены

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You have already maintenance`

Сообщение при попытке включения технических работ, если они включены

### `motd`
- По умолчанию `<color:#ff7171>The server is under maintenance`

Сообщения при просмотре сервера, если включены технические работы

### `kick`
- По умолчанию `<color:#ff7171>★ The server is under maintenance`

Причина исключения с сервера при включении технических работ

### `format-true`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server`

Сообщение при включении технических работ

### `format-false`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server`

Сообщение при отключении технических работ