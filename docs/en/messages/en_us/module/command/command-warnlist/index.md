# Command /warnlist
Path `messages > en_us.yml > module.command.warnlist`

## Explanation
Messages for `/warnlist` command
![command warnlist](/commandwarnlist.png)

## Edit
```yaml
<en_us.module.command.warnlist>
```

### Default
```yaml
command-warnlist:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARNLIST</u> in <time>"
  empty: "<color:#98FB98>☺ No warns found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  permanent: null
  global:
    header: "<fcolor:2>▋ Warns: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "Warns: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time: <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unwarn"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
  player:
    header: "<fcolor:2>▋ All warns: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
    gui:
      header: "Warns: <count>"
      line:
        - "<display_name>"
        - "<fcolor:1>Time: <time>"
        - "<fcolor:1>Date <date>"
        - "<fcolor:1>Click to unwarn"
      previous:
        - "<color:#666666>Previous page"
        - "<color:#666666>Go to page <color:#fad311><page>"
      next:
        - "<color:#666666>Next page"
        - "<color:#666666>Go to page <color:#fad311><page>"
```

## Options

- Configuration is here [Warnlist](/en/config/module/command/command-warnlist/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>WARNLIST</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `empty`
- Default `<color:#98FB98>☺ No warns found`

Message if the list of warning players is empty

### `null-page`
- Default `<color:#ff7171><b>⁉</b> This page doesn't exist`

Message if the entered page does not exist

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if the entered player is not found

### `permanent`
- Default `null`

Message to indicate the time if the warning is permanent

### `global`

::: details Messages for global warning

#### `header`
- Default `<fcolor:2>▋ Warns: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Format of each warn from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Messages for GUI

#### `header`
- Default `Warns: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Time: <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unwarn"
```
Message list for warn format from list, where:
- The first line is the name of the item
- The rest of the lines - description of the item

#### `previous`
- Default:
```yaml
- "<color:#666666>Previous page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

A list of messages for item `previous page`, where:
- The first line is name of item
- The rest of lines are description of item

#### `next`
- Default:
```yaml
- "<color:#666666>Next page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

A list of messages for item `next page`, where:
- The first line is name of item
- The rest of lines are description of item

:::

### `player`

::: details Messages for player warnings

#### `header`
- Default `<fcolor:2>▋ All warns: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Format of each warn from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Message for GUI

#### `header`
- Default `Warns: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Time: <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unwarn"
```
Message list for warn format from list, where:
- The first line is the name of the item
- The rest of the lines - description of the item

#### `previous`
- Default:
```yaml
- "<color:#666666>Previous page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

A list of messages for item `previous page`, where:
- The first line is name of item
- The rest of lines are description of item

#### `next`
- Default:
```yaml
- "<color:#666666>Next page"
- "<color:#666666>Go to page <color:#fad311><page>"
```

A list of messages for item `next page`, where:
- The first line is name of item
- The rest of lines are description of item

:::

