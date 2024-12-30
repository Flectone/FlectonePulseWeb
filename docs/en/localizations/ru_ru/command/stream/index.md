# Комманда /stream
Путь `localizations > ru_ru.yml > command.stream`

## Пояснение
Сообщения для комманды `/stream`
![command stream](/commandstream.png)

## Редактирование
```yaml
<ru_ru.command.stream>
```

### По умолчанию
```yaml
stream:
  already: "<color:#ff7171><b>⁉</b> Ты уже включил трансляцию"
  not: "<color:#ff7171><b>⁉</b> Ты не включил трансляцию"
  prefix-true: "<color:#ff4e4e>⏻</color:#ff4e4e> "
  prefix-false: ""
  url-tag: "<fcolor:2><click:open_url:\"<url>\"><hover:show_text:\"<fcolor:2><url>\"><url></hover></click>"
  format-start: "<br><color:#ff4e4e>🔔 <fcolor:1>Объявление <color:#ff4e4e>🔔<br><fcolor:1><display_name> начал трансляцию<br><urls><br>"
  format-end: "<fcolor:2>★ Спасибо за трансляцию на нашем сервере!"
```

## Параметры

- [Комманда](/ru/command/stream/)
- [Права](/ru/permission/command/stream/)

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты уже включил трансляцию`

Сообщение, если игрок, который ведёт трансляцию, пытается запустить ещё одну трансляцию

### `not`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты не включил трансляцию`

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
- По умолчанию `<br><color:#ff4e4e>🔔 <fcolor:1>Объявление <color:#ff4e4e>🔔<br><fcolor:1><display_name> начал трансляцию<br><urls><br>`

Оповещение о начале трансляции

### `format-end`
- По умолчанию `<fcolor:2>★ Спасибо за трансляцию на нашем сервере!`

Сообщение, если игрок закончил трансляцию
