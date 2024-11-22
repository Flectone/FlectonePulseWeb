# Комманда /warnlist
Путь `messages > ru_ru.yml > module.command.warnlist`

## Пояснение
Сообщения для комманды `/warnlist`
![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<ru_ru.module.command.warnlist>
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
    gui:
      header: "Предупреждения: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Время: <time>"
        - "<fcolor:1>Дата <date>"
        - "<fcolor:1>Снять предупреждение"
      previous:
        - "<color:#666666>Предыдущая страница"
        - "<color:#666666>Перейти на страницу <color:#fad311><page>"
      next:
        - "<color:#666666>Следующая страница"
        - "<color:#666666>Перейти на страницу <color:#fad311><page>"
  player:
    header: "<fcolor:2>▋ Все предупреждения: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "Все предупреждения: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Время: <time>"
        - "<fcolor:1>Дата <date>"
        - "<fcolor:1>Снять предупреждение"
      previous:
        - "<color:#666666>Предыдущая страница"
        - "<color:#666666>Перейти на страницу <color:#fad311><page>"
      next:
        - "<color:#666666>Следующая страница"
        - "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

## Параметры

- [Комманда](/ru/commands/module/command/warnlist/)
- [Права](/ru/permissions/module/command/warnlist/)

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

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `Предупреждения: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Время: <time>"
- "<fcolor:1>Дата <date>"
- "<fcolor:1>Снять предупреждение"
```
Список сообщений для формата предупреждения из списка, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `previous`
- По умолчанию:
```yaml
- "<color:#666666>Предыдущая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

Список сообщений для предмета `предыдущая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `next`
- По умолчанию:
```yaml
- "<color:#666666>Следующая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

Список сообщений для предмета `следующая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

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

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `Все предупреждения: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Время: <time>"
- "<fcolor:1>Дата <date>"
- "<fcolor:1>Снять предупреждение"
```
Список сообщений для формата предупреждения из списка, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `previous`
- По умолчанию:
```yaml
- "<color:#666666>Предыдущая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

Список сообщений для предмета `предыдущая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `next`
- По умолчанию:
```yaml
- "<color:#666666>Следующая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

Список сообщений для предмета `следующая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

:::

