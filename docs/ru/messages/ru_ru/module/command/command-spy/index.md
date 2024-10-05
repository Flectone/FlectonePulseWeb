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
command-spy:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPY</u> через <time>"
  enable: "<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку"
  disable: "<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку"
  format: "<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>"
```

## Параметры

- Конфигурация происходит тут [Spy](/ru/config/module/command/command-spy/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPY</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `enable`
- По умолчанию `<fcolor:1>[👁] Ты <color:#98FB98>включил <fcolor:1>слежку`

Сообщение при включении слежки

### `disable`
- По умолчанию `<fcolor:1>[👁] Ты <color:#F08080>выключил <fcolor:1>слежку`

Сообщение при выключении слежки

### `format`
- По умолчанию `<fcolor:1>[👁] <display_name> <color:#98FB98><action> <fcolor:1>→ <fcolor:2><message>`

Формат сообщения, которое будет отправлено при слежке за действием

