# Комманда /do
Путь `messages > en_us.yml > module.command.do`

## Пояснение
Сообщения для комманды `/do`
![command do](/commanddo.png)

## Редактирование
```yaml
<en_us.module.command.do>
```

### По умолчанию
```yaml
command-do:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DO</u> in <time>"
  format: "<fcolor:1>✎ <message> (<i><display_name></i>)"
```

## Параметры

- Конфигурация происходит тут [Do](/ru/config/module/command/command-do/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>DO</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>✎ <message> (<i><display_name></i>)`

Формат сообщения, которое будет отправлено

