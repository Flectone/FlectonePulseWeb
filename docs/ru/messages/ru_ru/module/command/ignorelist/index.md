# Комманда /ignorelist
Путь `messages > ru_ru.yml > module.command.ignorelist`

## Пояснение
Сообщения для комманды `/ignorelist`
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<ru_ru.module.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ Игнорируемых игроков нет"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  header: "<fcolor:2>▋ Игнорирования: <count> <br>"
  line: "<hover:show_text:\"<fcolor:1>Перестать игнорировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Дата: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  gui:
    header: "Игнорирования: <count>"
    line:
      - "<display_name>"
      - "<fcolor:1><date>"
      - "<fcolor:1>Перестать игнорировать"
    previous:
      - "<color:#666666>Предыдущая страница"
      - "<color:#666666>Перейти на страницу <color:#fad311><page>"
    next:
      - "<color:#666666>Следующая страница"
      - "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

## Параметры

- [Комманда](/ru/commands/module/command/ignorelist/)
- [Права](/ru/permissions/module/command/ignorelist/)

### `empty`
- По умолчанию `<color:#98FB98>☺ Игнорируемых игроков нет`

Сообщение, если список игнорируемых игроков пуст

### `null-page`
- По умолчанию `<color:#ff7171><b>⁉</b> Страница не найдена`

Сообщение, если введённая страница не существует

### `header`
- По умолчанию `<fcolor:2>▋ Игнорирования: <count> <br>`

Верхняя часть сообщения списка

### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Перестать игнорировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Дата: <date>`

Формат каждого игнорирования из списка

### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

### `gui`

::: details Сообщения для GUI
#### `header`
- По умолчанию `Игнорирования: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1><date>"
- "<fcolor:1>Перестать игнорировать"
```
Список сообщений для формата игнорирования из списка, где:
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

