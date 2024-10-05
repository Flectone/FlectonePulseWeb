# Комманда /firstonline
Путь `messages > en_us.yml > module.command.firstonline`

## Пояснение
Сообщения для комманды `/firstonline`
![command firstonline](/commandfirstonline.png)

## Редактирование
```yaml
<en_us.module.command.firstonline>
```

### По умолчанию
```yaml
command-firstonline:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FIRSTONLINE</u> in <time>"
  format: "<fcolor:1>⌛ <display_name> was first on server <time> ago"
```

## Параметры

- Конфигурация происходит тут [Firstonline](/ru/config/module/command/command-firstonline/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FIRSTONLINE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>⌛ <display_name> was first on server <time> ago`

Формат сообщения, которое будет отправлено

