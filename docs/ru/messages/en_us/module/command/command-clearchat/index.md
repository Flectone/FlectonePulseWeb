# Комманда /clearchat
Путь `messages > en_us.yml > module.command.clearchat`

## Пояснение
Сообщения для комманды `/clearchat`
![command clearchat](/commandclearchat.png)

## Редактирование
```yaml
<en_us.module.command.clearchat>
```

### По умолчанию
```yaml
command-clearchat:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARCHAT</u> in <time>"
  format: "<fcolor:1>💬 Chat is cleared"
```

## Параметры

- Конфигурация происходит тут [Clearchat](/ru/config/module/command/command-clearchat/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CLEARCHAT</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>💬 Chat is cleared`

Сообщение после очищения чата

