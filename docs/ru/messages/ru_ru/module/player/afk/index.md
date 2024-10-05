# Афк
Путь `messages > ru_ru.yml > module.player.afk`

## Пояснение
Сообщения при изменении режима АФК
![afk](/afkglobalmessage.png)

## Редактирование
```yaml
<ru_ru.module.player.message.bubble>
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

- Конфигурация происходит тут [Афк](/ru/config/module/player/afk/)

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