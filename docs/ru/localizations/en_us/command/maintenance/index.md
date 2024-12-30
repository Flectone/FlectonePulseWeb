# Комманда /maintenance
Путь `localizations > en_us.yml > command.maintenace`

## Пояснение
Сообщения для комманды `/maintenance`
![command maintenance](/commandmaintenance.png)

## Редактирование
```yaml
<en_us.command.maintenance>
```

### По умолчанию
```yaml
maintenance:
  not: "<color:#ff7171><b>⁉</b> You have not maintenance"
  already: "<color:#ff7171><b>⁉</b> You have already maintenance"
  server-description: "<color:#ff7171>The server is under maintenance"
  server-version: "Maintenance"
  kick: "<color:#ff7171>★ The server is under maintenance"
  format-true: "<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server"
  format-false: "<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server"
```

## Параметры

- [Комманда](/ru/command/maintenance/)
- [Права](/ru/permission/command/maintenance/)

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> You have not maintenance`

Сообщение при попытке отключения технических работ, если они не включены

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You have already maintenance`

Сообщение при попытке включения технических работ, если они включены

### `server-description`
- По умолчанию `<color:#ff7171>The server is under maintenance`

Сообщения при просмотре сервера, если включены технические работы

### `server-version`
- По умолчанию `Maintenance`

Название версии сервера, если включены технические работы

### `kick`
- По умолчанию `<color:#ff7171>★ The server is under maintenance`

Причина исключения с сервера при включении технических работ

### `format-true`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server`

Сообщение при включении технических работ

### `format-false`
- По умолчанию `<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server`

Сообщение при отключении технических работ