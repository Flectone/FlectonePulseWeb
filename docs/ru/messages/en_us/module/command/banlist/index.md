# Комманда /banlist
Путь `messages > en_us.yml > module.command.banlist`

## Пояснение
Сообщения для комманды `/banlist`
![command banlist](/commandbanlist.png)

## Редактирование
```yaml
<en_us.module.command.banlist>
```

### По умолчанию
```yaml
banlist:
  empty: "<color:#98FB98>☺ No bans found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  permanent-name: "PERMANENT"
  global:
    header: "<fcolor:2>▋ Bans: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unban <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "Bans: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unban"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
  player:
    header: "<fcolor:2>▋ All bans: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unban <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "All bans: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unban"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
```

## Параметры

- [Комманда](/ru/commands/module/command/banlist/)
- [Права](/ru/permissions/module/command/banlist/)

### `empty`
- По умолчанию `<color:#98FB98>☺ No bans found`

Сообщение, если список заблокированных игроков пуст

### `null-page`
- По умолчанию `<color:#ff7171><b>⁉</b> This page doesn't exist`

Сообщение, если введённая страница не существует

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `permanent-name`
- По умолчанию `PERMANENT`

Сообщение для обозначения времени, если игрок заблокирован навсегда

### `global`

::: details Сообщения для глобальных блокировок

#### `header`
- По умолчанию `<fcolor:2>▋ Bans: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Click to unban <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Формат каждого бана из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `Bans: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unban"
```
Список сообщений для формата бана из списка, где:
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

::: details Сообщения для блокировок игрока

#### `header`
- По умолчанию `<fcolor:2>▋ All bans: <count> <br>`

Верхняя часть сообщения списка

#### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Click to unban <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Формат каждого бана из списка

#### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

#### `gui`
Сообщения для GUI

#### `header`
- По умолчанию `All bans: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unban"
```
Список сообщений для формата бана из списка, где:
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

