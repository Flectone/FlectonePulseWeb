# Афк
Путь `localizations > ru_ru.yml > message.contact.afk`

## Пояснение
Сообщения при изменении режима АФК
![afk](/afkglobalmessage.png)

## Редактирование
```yaml
<ru_ru.message.contact.afk>
```

### По умолчанию
```yaml
afk:
  suffix: " <color:#FFFF00>⌚</color>"
  format-true:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> отошёл"
    local: "<gradient:#ffd500:#FFFF00>⌚ Ты отошёл от игры"
  format-false:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> вернулся"
    local: "<gradient:#ffd500:#FFFF00>⌚ Ты вернулся в игру"
```

## Параметры

- [Сообщения](/ru/message/contact/afk/)
- [Права](/ru/permission/message/contact/afk/)

### `suffix`
- По умолчанию `" <color:#FFFF00>⌚</color>"`

Суффикс, который выдаётся игроку, если он встал в АФК
![afksuffix](/afksuffix.png)

### `format-true`
- По умолчанию:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> отошёл"
local: "<gradient:#ffd500:#FFFF00>⌚ Ты отошёл от игры"
```

Сообщение, если игрок отошёл

### `format-false`
- По умолчанию:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> вернулся"
local: "<gradient:#ffd500:#FFFF00>⌚ Ты вернулся в игру"
```

Сообщение, если игрок вернулся