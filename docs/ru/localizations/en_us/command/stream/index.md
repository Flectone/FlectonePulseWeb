# Комманда /stream
Путь `localizations > en_us.yml > command.stream`

## Пояснение
Сообщения для комманды `/stream`
![command stream](/commandstream.png)

## Редактирование
```yaml
<en_us.command.stream>
```

### По умолчанию
```yaml
stream:
  already: "<color:#ff7171><b>⁉</b> You are already streaming"
  not: "<color:#ff7171><b>⁉</b> You don't stream"
  prefix-true: "<color:#ff4e4e>⏻</color:#ff4e4e> "
  prefix-false: ""
  url-tag: "<fcolor:2><click:open_url:\"<url>\"><hover:show_text:\"<fcolor:2><url>\"><url></hover></click>"
  format-start: "<br><color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔 <br><br><fcolor:1><display_name> started stream <br><br><urls>"
  format-end: "<fcolor:2>★ Thanks for streaming on our server!"
```

## Параметры

- [Комманда](/ru/command/stream/)
- [Права](/ru/permission/command/stream/)

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You are already streaming`

Сообщение, если игрок, который ведёт трансляцию, пытается запустить ещё одну трансляцию

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> You don't stream`

Сообщение, если игрок, который не ведёт трансляцию, пытается закончить трансляцию

### `prefix-true`
- По умолчанию `"<color:#ff4e4e>⏻</color:#ff4e4e> "`

Префикс игрока, который в данный момент ведёт трансляцию

### `prefix-false`
- По умолчанию `пусто`

Префикс игрока, который имеет право вести трансляцию, но в данный момент не ведёт её

### `url-tag`
- По умолчанию `<fcolor:2><click:open_url:\"<url>\"><hover:show_text:\"<fcolor:2><url>\"><url></hover></click>`

Формат каждой ссылки в оповещении

### `format-start`
- По умолчанию `<br><color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔 <br><br><fcolor:1><display_name> started stream <br><br><urls>`

Оповещение о начале трансляции

### `format-end`
- По умолчанию `<fcolor:2>★ Thanks for streaming on our server!`

Сообщение, если игрок закончил трансляцию
