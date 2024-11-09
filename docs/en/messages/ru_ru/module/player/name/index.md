# Name
Path `messages > ru_ru.yml > module.player.name`

## Explanation
Category for messages related to a player's nickname
- [Hover](/en/messages/ru_ru/module/player/name/hover/)

## Edit
```yaml
<ru_ru.module.player.name>
```

### Default
```yaml
name:
  display: "<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Написать <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>"
  entity: "<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Тип <fcolor:2><lang:<type>> <br><fcolor:1>Айди <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>"
  unknown: "<fcolor:2><name></fcolor:2>"
```

## Options

- Configuration is here [Name](/en/config/module/player/name/)

### `display`
- Default `<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Написать <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>`

Name for player
![name display](/namedisplay.png)

### `entity`
- Default `<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Тип <fcolor:2><lang:<type>> <br><fcolor:1>Айди <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>`

Name for entity

### `unknown`
- Default `<fcolor:2><name></fcolor:2>`

Name for unknown entity