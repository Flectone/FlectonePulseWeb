# Комманда /afk
Путь `messages > ru_ru.yml > module.command.afk`

## Пояснение
Сообщения для комманды `/afk`
![command afk](/afkglobalmessage.png)

## Редактирование
```yaml
<ru_ru.module.command.afk>
```

### По умолчанию
```yaml
command-afk:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>AFK</u> через <time>"
```

## Параметры

- Конфигурация происходит тут [Afk](/ru/config/module/command/command-afk/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>AFK</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

