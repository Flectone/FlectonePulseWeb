# Afk
Path `messages > ru_ru.yml > module.player.afk`

## Explanation
Messages when changing the AFK mode
![afk](/afkglobalmessage.png)

## Edit
```yaml
<ru_ru.module.player.message.bubble>
```

### Default
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

## Options

- Configuration is here [Afk](/en/config/module/player/afk/)

### `suffix`
- Default `" <color:#FFFF00>⌚</color>"`

Suffix that is given to a player if he AFK
![afksuffix](/afksuffix.png)

### `format-true`
- Default:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> отошёл"
local: "<gradient:#ffd500:#FFFF00>⌚ Ты отошёл от игры"
```

Message if a player has AFK

### `format-false`
- По умолчанию:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> вернулся"
local: "<gradient:#ffd500:#FFFF00>⌚ Ты вернулся в игру"
```

Message if a player has returned