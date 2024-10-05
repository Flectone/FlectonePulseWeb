# Комманда /lastonline
Путь `messages > ru_ru.yml > module.command.lastonline`

## Пояснение
Сообщения для комманды `/lastonline`
![command lastonline](/commandlastonline.png)

## Редактирование
```yaml
<ru_ru.module.command.lastonline>
```

### По умолчанию
```yaml
command-lastonline:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>LASTONLINE</u> через <time>"
  format: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
```

## Параметры

- Конфигурация происходит тут [Lastonline](/ru/config/module/command/command-lastonline/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `current`
- По умолчанию `<fcolor:1>⌛ <display_name> сейчас на сервере`

Сообщение, если введённый игрок на сервере

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>LASTONLINE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад`

Формат сообщения, которое будет отправлено

