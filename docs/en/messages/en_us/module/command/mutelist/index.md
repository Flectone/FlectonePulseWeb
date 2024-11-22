# Комманда /mutelist
Путь `messages > en_us.yml > module.command.mutelist`

## Пояснение
Сообщения для комманды `/mutelist`
![command mutelist](/commandmutelist.png)

## Редактирование
```yaml
<en_us.module.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  empty: "<color:#98FB98>☺ No mutes found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  global:
    header: "<fcolor:2>▋ Mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "Mutes: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unmute"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
  player:
    header: "<fcolor:2>▋ All mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "All mutes: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unmute"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
```

## Параметры

- [Комманда](/en/commands/module/command/mutelist/)
- [Права](/en/permissions/module/command/mutelist/)

### `empty`
- По умолчанию `<color:#98FB98>☺ No mutes found`

Сообщение, если список игроков с мутами пуст

### `null-page`
- По умолчанию `<color:#ff7171><b>⁉</b> This page doesn't exist`

Сообщение, если введённая страница не существует

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных мутов

#### `header`
- По умолчанию `<fcolor:2>▋ Mutes: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Формат каждого мута из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `Mutes: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unmute"
```
Список сообщений для формата мута из списка, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `previous`
- По умолчанию:
```yaml
- "<color:#666666>Previous page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

Список сообщений для предмета `предыдущая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `next`
- По умолчанию:
```yaml
- "<color:#666666>Next page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

Список сообщений для предмета `следующая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

:::

### `player`

::: details Сообщения для мутов игрока

#### `header`
- По умолчанию `<fcolor:2>▋ All mutes: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Формат каждого мута из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `All mutes: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unmute"
```
Список сообщений для формата мута из списка, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `previous`
- По умолчанию:
```yaml
- "<color:#666666>Previous page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

Список сообщений для предмета `предыдущая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

#### `next`
- По умолчанию:
```yaml
- "<color:#666666>Next page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

Список сообщений для предмета `следующая страница`, где:
- Первая строчка - название предмета
- Остальные строчки - описание предмета

:::

