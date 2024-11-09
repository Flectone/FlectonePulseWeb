# Комманда /online
Путь `messages > ru_ru.yml > module.command.online`

## Пояснение
Сообщения для комманды `/online`
![command online](/commandonline.png)

## Редактирование
```yaml
<ru_ru.module.command.online>
```

### По умолчанию
```yaml
command-online:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (first/last/total) (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ONLINE</u> через <time>"
  format-first: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>"
```

## Параметры

- Конфигурация происходит тут [Online](/ru/config/module/command/command-online/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (first/last/total) (игрок)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `current`
- По умолчанию `<fcolor:1>⌛ <display_name> сейчас на сервере`

Сообщение, если введённый игрок на сервере

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>ONLINE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format-first`
- По умолчанию `<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад`

Формат сообщения `/online first`, которое будет отправлено

### `format-last`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад`

Формат сообщения `/online last`, которое будет отправлено

### `format-total`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>`

Формат сообщения `/online total`, которое будет отправлено


