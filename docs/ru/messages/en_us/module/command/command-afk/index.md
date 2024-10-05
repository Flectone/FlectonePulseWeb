# Комманда /afk
Путь `messages > en_us.yml > module.command.afk`

## Пояснение
Сообщения для комманды `/afk`
![command afk](/afkglobalmessage.png)

## Редактирование
```yaml
<en_us.module.command.afk>
```

### По умолчанию
```yaml
command-afk:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>AFK</u> in <time>"
```

## Параметры

- Конфигурация происходит тут [Afk](/ru/config/module/command/command-afk/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>AFK</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

