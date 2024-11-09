# Имя
Путь `messages > ru_ru.yml > module.player.name`

## Пояснение
Категория, отвечающая за сообщения связанные с ником игрока
- [При наведении](/ru/messages/ru_ru/module/player/name/hover/)

## Редактирование
```yaml
<ru_ru.module.player.name>
```

### По умолчанию
```yaml
name:
  display: "<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Написать <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>"
  entity: "<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Тип <fcolor:2><lang:<type>> <br><fcolor:1>Айди <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>"
  unknown: "<fcolor:2><name></fcolor:2>"
```

## Параметры

- Конфигурация происходит тут [Имя](/ru/config/module/player/name/)

### `display`
- По умолчанию `<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Написать <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>`

Отвечает за имя игрока
![name display](/namedisplay.png)

### `entity`
- По умолчанию `<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Тип <fcolor:2><lang:<type>> <br><fcolor:1>Айди <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>`

Отвечает за имя сущности

### `unknown`
- По умолчанию `<fcolor:2><name></fcolor:2>`

Отвечает за неизвестное имя
