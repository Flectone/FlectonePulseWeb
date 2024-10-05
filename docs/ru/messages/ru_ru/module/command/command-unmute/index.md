# Комманда /unmute
Путь `messages > ru_ru.yml > module.command.unmute`

## Пояснение
Сообщения для комманды `/unmute`
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<ru_ru.module.command.unmute>
```

### По умолчанию
```yaml
command-unmute:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNMUTE</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not: "<color:#ff7171><b>⁉</b> Игрок не замучен"
  format: "<color:#98FB98>☻ Игрок <display_name> размучен"
```

## Параметры

- Конфигурация происходит тут [Unmute](/ru/config/module/command/command-unmute/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNMUTE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не замучен`

Сообщение, если введённый игрок не замучен

### `format`
- По умолчанию `<color:#98FB98>☻ Игрок <display_name> размучен`

Сообщение при размуте
