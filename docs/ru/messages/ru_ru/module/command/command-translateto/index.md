# Комманда /translateto
Путь `messages > ru_ru.yml > module.command.translateto`

## Пояснение
Сообщения для комманды `/translateto`
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<ru_ru.module.command.translateto>
```

### По умолчанию
```yaml
command-translateto:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (исходный язык) (выбранный язык) (сообщение)"
  error: "<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRANSLATETO</u> через <time>"
  format: "<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>"
```

## Параметры

- Конфигурация происходит тут [Translateto](/ru/config/module/command/command-translateto/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (исходный язык) (выбранный язык) (сообщение)`

Сообщение о том, как использовать комманду

### `error`
- По умолчанию `<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык`

Сообщение, если произошла ошибка при переводе

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TRANSLATETO</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>`

Формат сообщения, которое будет отправлено

