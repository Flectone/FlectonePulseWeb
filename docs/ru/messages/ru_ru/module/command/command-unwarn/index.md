# Комманда /unwarn
Путь `messages > ru_ru.yml > module.command.unwarn`

## Пояснение
Сообщения для комманды `/unwarn`
![command unwarn](/commandunwarn.png)

## Редактирование
```yaml
<ru_ru.module.command.unwarn>
```

### По умолчанию
```yaml
command-unwarn:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNWARN</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not: "<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений"
  format: "<color:#98FB98>☻ С игрока <display_name> снято предупреждение"
```

## Параметры

- Конфигурация происходит тут [Unwarn](/ru/config/module/command/command-unwarn/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>UNWARN</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений`

Сообщение, если введённый игрок не имеет предупреждения

### `format`
- По умолчанию `<color:#98FB98>☻ С игрока <display_name> снято предупреждение`

Сообщение при снятии предупреждения
