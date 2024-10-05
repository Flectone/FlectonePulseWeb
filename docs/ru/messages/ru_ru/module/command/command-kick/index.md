# Комманда /kick
Путь `messages > ru_ru.yml > module.command.kick`

## Пояснение
Сообщения для комманды `/kick`
![command kick](/commandkick.png)

## Редактирование
```yaml
<ru_ru.module.command.kick>
```

### По умолчанию
```yaml
command-kick:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (причина)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>KICK</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  default-reason: "Исключён модератором"
  global: "<color:#ff7171><br>⏵ Игрок <target> был исключён <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты исключён модератором <moderator> <br>Причина: <message>"
```

## Параметры

- Конфигурация происходит тут [Kick](/ru/config/module/command/command-kick/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок) (причина)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>KICK</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `default-reason`
- По умолчанию `Исключён модератором`

Причина по умолчанию, если она не введена

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Игрок <target> был исключён <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ Ты исключён модератором <moderator> <br>Причина: <message>`

Сообщение для игрока

