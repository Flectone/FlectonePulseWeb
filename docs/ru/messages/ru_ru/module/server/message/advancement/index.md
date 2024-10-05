# Достижение
Путь `messages > ru_ru.yml > module.server.message.advancement`

## Пояснение
Сообщение при получении достижения игроком
![task](/task.png)

## Редактирование
```yaml
<ru_ru.module.server.message.advancement>
```

### По умолчанию
```yaml
advancement:
  task:
    hover: "<color:#4eff52><advancement_title> <br><advancement_description>"
    format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>получил достижение <color:#4eff52>[<advancement>]"
  goal:
    hover: "<color:#FFFF00><advancement_title> <br><advancement_description>"
    format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>выполнил цель <color:#FFFF00>[<advancement>]"
  challenge:
    hover: "<color:#834eff><advancement_title> <br><advancement_description>"
    format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>завершил испытание <color:#834eff>[<advancement>]"
```

## Параметры

- Конфигурация происходит тут [Достижение](/ru/config/module/server/message/advancement/)

### `task`
- По умолчанию:
```yaml
hover: "<color:#4eff52><advancement_title> <br><advancement_description>"
format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>получил достижение <color:#4eff52>[<advancement>]"
```

Сообщение при получении обычного достижения
![task](/task.png)

### `goal`
- По умолчанию:
```yaml
hover: "<color:#FFFF00><advancement_title> <br><advancement_description>"
format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>выполнил цель <color:#FFFF00>[<advancement>]"
```

Сообщение при достижении цели
![goal](/goal.png)

### `challenge`
- По умолчанию:
```yaml
hover: "<color:#834eff><advancement_title> <br><advancement_description>"
format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>завершил испытание <color:#834eff>[<advancement>]"
```

Сообщение при завершении испытания
![challenge](/challenge.png)