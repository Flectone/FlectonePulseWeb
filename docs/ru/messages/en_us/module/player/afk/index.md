# Афк
Путь `messages > en_us.yml > module.player.afk`

## Пояснение
Сообщения при изменении режима АФК
![afk](/afkglobalmessage.png)

## Редактирование
```yaml
<en_us.module.player.message.bubble>
```

### По умолчанию
```yaml
afk:
  suffix: " <color:#FFFF00>⌚</color>"
  format-true:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> is now afk"
    local: "<gradient:#ffd500:#FFFF00>⌚ Now you're afk"
  format-false:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> isn't afk now"
    local: "<gradient:#ffd500:#FFFF00>⌚ Now you're not afk"
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
global: "<gradient:#ffd500:#FFFF00>⌚ <player> is now afk"
local: "<gradient:#ffd500:#FFFF00>⌚ Now you're afk"
```

Сообщение, если игрок отошёл

### `format-false`
- По умолчанию:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> isn't afk now"
local: "<gradient:#ffd500:#FFFF00>⌚ Now you're not afk"
```

Сообщение, если игрок вернулся