# Комманда /ignorelist
Путь `messages > en_us.yml > module.command.ignorelist`

## Пояснение
Сообщения для комманды `/ignorelist`
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<en_us.module.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ You don't ignore anyone"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  header: "<fcolor:2>▋ Ignores: <count><br>"
  line: "<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  gui:
    header: "Ignores: <count>"
    line:
      - "<display_name>"
      - "<fcolor:1><date>"
      - "<fcolor:1>Click to unignore"
    previous:
      - "<color:#666666>Previous page"
      - "<color:#666666>Go to page <color:#fad311><page>"
    next:
      - "<color:#666666>Next page"
      - "<color:#666666>Go to page <color:#fad311><page>"
```

## Параметры

- [Комманда](/en/commands/module/command/ignorelist/)
- [Права](/en/permissions/module/command/ignorelist/)

### `empty`
- По умолчанию `<color:#98FB98>☺ You don't ignore anyone`

Сообщение, если список игнорируемых игроков пуст

### `null-page`
- По умолчанию `<color:#ff7171><b>⁉</b> This page doesn't exist`

Сообщение, если введённая страница не существует

### `header`
- По умолчанию `<fcolor:2>▋ Ignores: <count><br>`

Верхняя часть сообщения списка

### `line`
- По умолчанию `<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>`

Формат каждого игнорирования из списка

### `footer`
- По умолчанию `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Нижняя часть сообщения списка

### `gui`

::: details Сообщения для GUI
#### `header`
- По умолчанию `Ignores: <count>`

Сообщение для названия GUI

#### `line`
- По умолчанию:
```yaml
- "<display_name>"
- "<fcolor:1><date>"
- "<fcolor:1>Click to unignore"
```
Список сообщений для формата игнорирования из списка, где:
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

