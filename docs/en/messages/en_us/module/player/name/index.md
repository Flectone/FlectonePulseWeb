# Name
Path `messages > en_us.yml > module.player.name`

## Explanation
Category for messages related to a player's nickname
- [Hover](/en/messages/en_us/module/player/name/hover/)

## Edit
```yaml
<en_us.module.player.name>
```

### Default
```yaml
name:
  display: "<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Write to <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>"
  entity: "<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Type <fcolor:2><lang:<type>> <br><fcolor:1>ID <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>"
  unknown: "<fcolor:2><name></fcolor:2>"
```

## Options

- Configuration is here [Name](/en/config/module/player/name/)

### `display`
- Default `<prefix><fcolor:2><player></fcolor><suffix>`

Name for player
![name display](/namedisplay.png)

### `entity`
- Default `<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Type <fcolor:2><lang:<type>> <br><fcolor:1>ID <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>`

Name for entity

### `unknown`
- Default `<fcolor:2><name></fcolor:2>`

Name for unknown entity