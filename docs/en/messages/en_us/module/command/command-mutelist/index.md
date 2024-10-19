# Command /mutelist
Path `messages > en_us.yml > module.command.mutelist`

## Explanation
Messages for `/mutelist` command
![command mutelist](/commandmutelist.png)

## Edit
```yaml
<en_us.module.command.mutelist>
```

### Default
```yaml
command-mutelist:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MUTELIST</u> in <time>"
  empty: "<color:#98FB98>☺ No mutes found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  permanent: null
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
```

## Options

- Configuration is here [Mutelist](/en/config/module/command/command-mutelist/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MUTELIST</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `empty`
- Default `<color:#98FB98>☺ No mutes found`

Message if the list of muting players is empty

### `null-page`
- Default `<color:#ff7171><b>⁉</b> This page doesn't exist`

Message if the entered page does not exist

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if the entered player is not found

### `permanent`
- Default `null`

Message to indicate the time if the muting is permanent

### `global`

::: details Messages for global muting

#### `header`
- Default `<fcolor:2>▋ Mutes: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Format of each mute from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Messages for GUI

#### `header`
- Default `Mutes: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unmute"
```
Message list for mute format from list, where:
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

::: details Messages for player mutes

#### `header`
- Default `<fcolor:2>▋ All mutes: <count> <br>`

Top of the list message

#### `line`
- Default `<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Date: <date><br>Time: <time><br>Reason: <reason>\">[MORE]</hover>`

Format of each mute from the list

#### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

#### `gui`
Message for GUI

#### `header`
- Default `Mutes: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1>Time <time>"
- "<fcolor:1>Date <date>"
- "<fcolor:1>Click to unmute"
```
Message list for mute format from list, where:
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

