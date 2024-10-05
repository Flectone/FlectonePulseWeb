# Комманда /mark
Путь `messages > ru_ru.yml > module.command.mark`

## Пояснение
Сообщения для комманды `/mark`
![command mark](/commandmark.gif)

## Редактирование
```yaml
<ru_ru.module.command.mark>
```

### По умолчанию
```yaml
command-mark:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (цвет)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>"
```

## Параметры

- Конфигурация происходит тут [Mark](/ru/config/module/command/command-mark/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (цвет)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

