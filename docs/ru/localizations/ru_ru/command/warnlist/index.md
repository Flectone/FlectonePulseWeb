# Комманда /warnlist
Путь `localizations > ru_ru.yml > command.warnlist`

## Пояснение
Сообщения для комманды `/warnlist`
![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<ru_ru.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  empty: "<color:#98FB98>☺ Предупреждения не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global:
    header: "<fcolor:2>▋ Предупреждения: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ Все предупреждения: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/ru/command/warnlist/)
- [Права](/ru/permission/command/warnlist/)

### `empty`
- По умолчанию `<color:#98FB98>☺ Предупреждения не найдены`

Сообщение, если список игроков предупреждений пуст

### `null-page`
- По умолчанию `<color:#ff7171><b>⁉</b> Страница не найдена`

Сообщение, если введённая страница не существует

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `permanent`
- По умолчанию `null`

Сообщение для обозначения времени, если предупреждение навсегда

### `global`

::: details Сообщения для глобальных предупреждений

#### `header`
- По умолчанию `<fcolor:2>▋ Предупреждения: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>`

Формат каждого предупреждения из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для предупреждений игрока

#### `header`
- По умолчанию `<fcolor:2>▋ Все предупреждения: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>`

Формат каждого предупреждения из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка
:::

