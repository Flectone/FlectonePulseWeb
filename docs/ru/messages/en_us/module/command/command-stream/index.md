# Комманда /stream
Путь `messages > en_us.yml > module.command.stream`

## Пояснение
Сообщения для комманды `/stream`
![command stream](/commandstream.png)

## Редактирование
```yaml
<en_us.module.command.stream>
```

### По умолчанию
```yaml
command-stream:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (start|end) (url)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>STREAM</u> in <time>"
  already: "<color:#ff7171><b>⁉</b> You are already streaming"
  not: "<color:#ff7171><b>⁉</b> You don't stream"
  prefix-enable: "<color:#ff4e4e>⏻</color:#ff4e4e> "
  prefix-disable: ""
  end: "<fcolor:2>★ Thanks for streaming on our server!"
  start:
    - " "
    - "<color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔"
    - " "
    - "<fcolor:1><display_name> started stream"
    - " "
    - "<urls>"
    - " "
```

## Параметры

- Конфигурация происходит тут [Stream](/ru/config/module/command/command-stream/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (start|end) (url)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>STREAM</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You are already streaming`

Сообщение, если игрок, который ведёт трансляцию, пытается запустить ещё одну трансляцию

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> You don't stream`

Сообщение, если игрок, который не ведёт трансляцию, пытается закончить трансляцию

### `prefix-enable`
- По умолчанию `"<color:#ff4e4e>⏻</color:#ff4e4e> "`

Префикс игрока, который в данный момент ведёт трансляцию

### `end`
- По умолчанию `<fcolor:2>★ Thanks for streaming on our server!`

Сообщение, если игрок закончил трансляцию

### `prefix-disable`
- По умолчанию `пусто`

Префикс игрока, который имеет право вести трансляцию, но в данный момент не ведёт её

### `start`
- По умолчанию:
```yaml
- " "
- "<color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔"
- " "
- "<fcolor:1><display_name> started stream"
- " "
- "<urls>"
- " "
```

Оповещение о начале трансляции
