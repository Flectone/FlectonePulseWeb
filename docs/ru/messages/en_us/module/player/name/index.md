# Имя
Путь `messages > en_us.yml > module.player.name.*`

## Пояснение
Категория, отвечающая за сообщения связанные с ником игрока
- [При наведении](/ru/messages/en_us/module/player/name/hover/)

## Редактирование
```yaml
<en_us.module.player.name>
```

### По умолчанию
```yaml
name:
  display: "<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Write to <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>"
  entity: "<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Type <fcolor:2><lang:<type>> <br><fcolor:1>ID <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>"
  unknown: "<fcolor:2><name></fcolor:2>"
```

## Параметры

- Конфигурация происходит тут [Имя](/ru/config/module/player/name/)

### `display`
- По умолчанию `<prefix><fcolor:2><player></fcolor><suffix>`

Отвечает за тег `<display_name>`
![name display](/namedisplay.png)