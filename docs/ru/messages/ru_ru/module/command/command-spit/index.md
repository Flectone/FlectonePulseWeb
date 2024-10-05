# Комманда /spit
Путь `messages > ru_ru.yml > module.command.spit`

## Пояснение
Сообщения для комманды `/spit`
![command spit](/commandspit.gif)

## Редактирование
```yaml
<ru_ru.module.command.spit>
```

### По умолчанию
```yaml
command-spit:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>"
```

## Параметры

- Конфигурация происходит тут [Spit](/ru/config/module/command/command-spit/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

