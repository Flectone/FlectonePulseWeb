# Комманда /spy
Путь `messages > ru_ru.yml > module.command.spy`

## Пояснение
Сообщения для комманды `/spy`
![command spy](/commandspy.gif)

## Редактирование
```yaml
<ru_ru.module.command.spy>
```

### По умолчанию
```yaml
spy:
  format-true: "<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку"
  format-false: "<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку"
  format-log: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Параметры

- [Комманда](/en/commands/module/command/spy/)
- [Права](/en/permissions/module/command/spy/)

### `format-true`
- По умолчанию `<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку`

Сообщение при включении слежки

### `format-false`
- По умолчанию `<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку`

Сообщение при выключении слежки

### `format-log`
- По умолчанию `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Формат сообщения, которое будет отправлено при слежке за действием

