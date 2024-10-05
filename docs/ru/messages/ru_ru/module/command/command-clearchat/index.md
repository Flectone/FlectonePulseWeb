# Комманда /clearchat
Путь `messages > ru_ru.yml > module.command.clearchat`

## Пояснение
Сообщения для комманды `/clearchat`
![command clearchat](/commandclearchat.png)

## Редактирование
```yaml
<ru_ru.module.command.clearchat>
```

### По умолчанию
```yaml
command-clearchat:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARCHAT</u> через <time>"
  format: "<fcolor:1>💬 Чат очищен"
```

## Параметры

- Конфигурация происходит тут [Clearchat](/ru/config/module/command/command-clearchat/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CLEARCHAT</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>💬 Чат очищен`

Сообщение после очищения чата

