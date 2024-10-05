# Комманда /firstonline
Путь `messages > ru_ru.yml > module.command.firstonline`

## Пояснение
Сообщения для комманды `/firstonline`
![command firstonline](/commandfirstonline.png)

## Редактирование
```yaml
<ru_ru.module.command.firstonline>
```

### По умолчанию
```yaml
command-firstonline:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FIRSTONLINE</u> через <time>"
  format: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
```

## Параметры

- Конфигурация происходит тут [Firstonline](/ru/config/module/command/command-firstonline/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FIRSTONLINE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад`

Формат сообщения, которое будет отправлено

