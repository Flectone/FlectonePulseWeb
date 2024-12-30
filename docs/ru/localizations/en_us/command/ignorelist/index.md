# Комманда /ignorelist
Путь `localizations > en_us.yml > command.ignorelist`

## Пояснение
Сообщения для комманды `/ignorelist`
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<en_us.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ You don't ignore anyone"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  header: "<fcolor:2>▋ Ignores: <count><br>"
  line: "<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/ru/command/ignorelist/)
- [Права](/ru/permission/command/ignorelist/)

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

