# Комманда /do
Путь `messages > ru_ru.yml > module.command.do`

## Пояснение
Сообщения для комманды `/do`
![command do](/commanddo.png)

## Редактирование
```yaml
<ru_ru.module.command.do>
```

### По умолчанию
```yaml
command-do:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DO</u> через <time>"
  format: "<fcolor:1>✎ <message> (<i><display_name></i>)"
```

## Параметры

- Конфигурация происходит тут [Do](/ru/config/module/command/command-do/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>DO</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>✎ <message> (<i><display_name></i>)`

Формат сообщения, которое будет отправлено

