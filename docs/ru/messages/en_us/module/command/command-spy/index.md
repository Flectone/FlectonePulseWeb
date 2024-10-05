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
command-spy:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPY</u> in <time>"
  enable: "<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode"
  disable: "<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode"
  format: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Параметры

- Конфигурация происходит тут [Spy](/ru/config/module/command/command-spy/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPY</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `enable`
- По умолчанию `<fcolor:1>[👁] You <color:#98FB98>turned on <fcolor:1>spy mode`

Сообщение при включении слежки

### `disable`
- По умолчанию `<fcolor:1>[👁] You <color:#F08080>turned off <fcolor:1>spy mode`

Сообщение при выключении слежки

### `format`
- По умолчанию `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Формат сообщения, которое будет отправлено при слежке за действием

