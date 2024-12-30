# Достижение
Путь `localizations > ru_ru.yml > message.advancement`

## Пояснение
Сообщение при получении достижения игроком
![task](/task.png)

## Редактирование
```yaml
<ru_ru.message.advancement>
```

### По умолчанию
```yaml
advancement:
  task:
    format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>получил достижение <advancement>"
    tag: "<color:#4eff52>[<hover:show_text:\"<color:#4eff52><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  goal:
    format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>выполнил цель <advancement>"
    tag: "<color:#FFFF00>[<hover:show_text:\"<color:#FFFF00><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  challenge:
    format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>завершил испытание <advancement>"
    tag: "<color:#834eff>[<hover:show_text:\"<color:#834eff><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  revoke:
    many-to-one: "<fcolor:1>🌠 Отозвано <fcolor:2><number></fcolor:2> достижений у игрока <display_name>"
    one-to-one: "<fcolor:1>🌠 Отозвано достижение <fcolor:2><advancement></fcolor:2> у игрока <display_name>"
  grant:
    many-to-one: "<fcolor:1>🌠 Выдано <fcolor:2><number></fcolor:2> достижений игроку <display_name>"
    one-to-one: "<fcolor:1>🌠 Достижение <fcolor:2><advancement></fcolor:2> выдано игроку <display_name>"
```

## Параметры

- [Сообщения](/ru/message/advancement/)
- [Права](/ru/permission/message/advancement/)

### `task`
- По умолчанию:
```yaml
format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>получил достижение <advancement>"
tag: "<color:#4eff52>[<hover:show_text:\"<color:#4eff52><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Сообщение при получении обычного достижения
![task](/task.png)

### `goal`
- По умолчанию:
```yaml
format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>выполнил цель <advancement>"
tag: "<color:#FFFF00>[<hover:show_text:\"<color:#FFFF00><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Сообщение при достижении цели
![goal](/goal.png)

### `challenge`
- По умолчанию:
```yaml
format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>завершил испытание <advancement>"
tag: "<color:#834eff>[<hover:show_text:\"<color:#834eff><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Сообщение при завершении испытания
![challenge](/challenge.png)

### `revoke`
- По умолчанию:
```yaml
many-to-one: "<fcolor:1>🌠 Отозвано <fcolor:2><number></fcolor:2> достижений у игрока <display_name>"
one-to-one: "<fcolor:1>🌠 Отозвано достижение <fcolor:2><advancement></fcolor:2> у игрока <display_name>"
```

Сообщение при использовании `/advancement revoke`

### `grant`
- По умолчанию:
```yaml
many-to-one: "<fcolor:1>🌠 Выдано <fcolor:2><number></fcolor:2> достижений игроку <display_name>"
one-to-one: "<fcolor:1>🌠 Достижение <fcolor:2><advancement></fcolor:2> выдано игроку <display_name>"
```

Сообщение при использовании `/advancement grant`