# Комманда /spy
Путь `messages > en_us.yml > module.command.spy`

## Пояснение
Сообщения для комманды `/spy`
![command spy](/commandspy.gif)

## Редактирование
```yaml
<en_us.module.command.spy>
```

### По умолчанию
```yaml
spy:
  format-true: "<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode"
  format-false: "<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode"
  format-log: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Параметры

- [Комманда](/ru/commands/module/command/spy/)
- [Права](/ru/permissions/module/command/spy/)

### `format-true`
- По умолчанию `<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode`

Сообщение при включении слежки

### `format-false`
- По умолчанию `<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode`

Сообщение при выключении слежки

### `format-log`
- По умолчанию `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Формат сообщения, которое будет отправлено при слежке за действием

