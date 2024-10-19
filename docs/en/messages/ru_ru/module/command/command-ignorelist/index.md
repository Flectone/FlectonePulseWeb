# Command /ignorelist
Path `messages > ru_ru.yml > module.command.ignorelist`

## Explanation
Messages for `/ignorelist` command
![command ignorelist](/commandignorelist.png)

## Edit
```yaml
<ru_ru.module.command.ignorelist>
```

### Default
```yaml
command-ignorelist:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>IGNORELIST</u> через <time>"
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

## Options

- Configuration is here [Ignorelist](/en/config/module/command/command-ignorelist/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>IGNORELIST</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `empty`
- Default `<color:#98FB98>☺ Игнорируемых игроков нет`

Message if the list of ignoring players is empty

### `null-page`
- Default `<color:#ff7171><b>⁉</b> Страница не найдена`

Message if the entered page does not exist

### `header`
- Default `<fcolor:2>▋ Игнорирования: <count> <br>`

Top of the list message

### `line`
- Default `<hover:show_text:\"<fcolor:1>Перестать игнорировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Дата: <date>`

Format of each ignore from the list

### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

### `gui`

::: details Messages for GUI
#### `header`
- Default `Игнорирования: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1><date>"
- "<fcolor:1>Перестать игнорировать"
```
Message list for ignore format from list, where:
- The first line is the name of the item
- The rest of the lines - description of the item

#### `previous`
- Default:
```yaml
- "<color:#666666>Предыдущая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

A list of messages for item `previous page`, where:
- The first line is name of item
- The rest of lines are description of item

#### `next`
- Default:
```yaml
- "<color:#666666>Следующая страница"
- "<color:#666666>Перейти на страницу <color:#fad311><page>"
```

A list of messages for item `next page`, where:
- The first line is name of item
- The rest of lines are description of item

:::

