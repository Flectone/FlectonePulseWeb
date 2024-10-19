# Command /warnlist
Path `messages > ru_ru.yml > module.command.warnlist`

## Explanation
Messages for `/warnlist` command
![command warnlist](/commandwarnlist.png)

## Edit
```yaml
<ru_ru.module.command.warnlist>
```

### Default
```yaml
command-warnlist:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>WARNLIST</u> через <time>"
  empty: "<color:#98FB98>☺ Предупреждения не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  permanent: null
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

## Options

- Configuration is here [Warnlist](/en/config/module/command/command-warnlist/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>WARNLIST</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `empty`
- Default `<color:#98FB98>☺ Предупреждения не найдены`

Message if the list of warning players is empty

### `null-page`
- Default `<color:#ff7171><b>⁉</b> Страница не найдена`

Message if the entered page does not exist

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if the entered player is not found

### `permanent`
- Default `null`

Message to indicate the time if the warning is permanent

### `global`

::: details Messages for global warning

#### `header`
- Default `<fcolor:2>▋ Предупреждения: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>`

Format of each warn from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Messages for GUI

#### `header`
- Default `Предупреждения: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Время: <time>"
- "<fcolor:1>Дата <date>"
- "<fcolor:1>Снять предупреждение"
```
Message list for warn format from list, where:
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

### `player`

::: details Messages for player warnings

#### `header`
- Default `<fcolor:2>▋ Все предупреждения: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Дата: <date><br>Время: <time><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>`

Format of each warn from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Message for GUI

#### `header`
- Default `Все предупреждения: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Время: <time>"
- "<fcolor:1>Дата <date>"
- "<fcolor:1>Снять предупреждение"
```
Message list for warn format from list, where:
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

