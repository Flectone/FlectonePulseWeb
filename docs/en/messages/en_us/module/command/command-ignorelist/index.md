# Command /ignorelist
Path `messages > en_us.yml > module.command.ignorelist`

## Explanation
Messages for `/ignorelist` command
![command ignorelist](/commandignorelist.png)

## Edit
```yaml
<en_us.module.command.ignorelist>
```

### Default
```yaml
command-ignorelist:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORELIST</u> in <time>"
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

## Options

- Configuration is here [Ignorelist](/en/config/module/command/command-ignorelist/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORELIST</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `empty`
- Default `<color:#98FB98>☺ You don't ignore anyone`

Message if the list of ignoring players is empty

### `null-page`
- Default `<color:#ff7171><b>⁉</b> This page doesn't exist`

Message if the entered page does not exist

### `header`
- Default `<fcolor:2>▋ Ignores: <count><br>`

Top of the list message

### `line`
- Default `<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>`

Format of each ignore from the list

### `footer`
- Default `<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→`

Bottom of list message

### `gui`

::: details Messages for GUI
#### `header`
- Default `Ignores: <count>`

Message for GUI name

#### `line`
- Default:
```yaml
- "<display_name>"
- "<fcolor:1><date>"
- "<fcolor:1>Click to unignore"
```
Message list for ignore format from list, where:
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

