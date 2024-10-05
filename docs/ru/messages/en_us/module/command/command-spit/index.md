# Комманда /spit
Путь `messages > en_us.yml > module.command.spit`

## Пояснение
Сообщения для комманды `/spit`
![command spit](/commandspit.gif)

## Редактирование
```yaml
<en_us.module.command.spit>
```

### По умолчанию
```yaml
command-spit:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>"
```

## Параметры

- Конфигурация происходит тут [Spit](/ru/config/module/command/command-spit/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

