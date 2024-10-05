# Комманда /translateto
Путь `messages > en_us.yml > module.command.translateto`

## Пояснение
Сообщения для комманды `/translateto`
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<en_us.module.command.translateto>
```

### По умолчанию
```yaml
command-translateto:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (source lang) (target lang) (message)"
  error: "<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRANSLATETO</u> in <time>"
  format: "<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>"
```

## Параметры

- Конфигурация происходит тут [Translateto](/ru/config/module/command/command-translateto/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (source lang) (target lang) (message)`

Сообщение о том, как использовать комманду

### `error`
- По умолчанию `<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language`

Сообщение, если произошла ошибка при переводе

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TRANSLATETO</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>`

Формат сообщения, которое будет отправлено

