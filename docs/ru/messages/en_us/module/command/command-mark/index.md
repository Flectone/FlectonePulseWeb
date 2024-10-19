# Комманда /mark
Путь `messages > en_us.yml > module.command.mark`

## Пояснение
Сообщения для комманды `/mark`
![command mark](/commandmark.gif)

## Редактирование
```yaml
<en_us.module.command.mark>
```

### По умолчанию
```yaml
command-mark:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (color)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>"
```

## Параметры

- Конфигурация происходит тут [Mark](/ru/config/module/command/command-mark/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (color)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

