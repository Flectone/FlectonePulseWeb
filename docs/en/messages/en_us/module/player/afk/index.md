# Afk
Path `messages > en_us.yml > module.player.afk`

## Explanation
Messages when changing the AFK mode
![afk](/afkglobalmessage.png)

## Edit
```yaml
<en_us.module.player.message.bubble>
```

### Default
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

## Options

- Configuration is here [Afk](/en/config/module/player/afk/)

### `suffix`
- Default `" <color:#FFFF00>⌚</color>"`

Suffix that is given to a player if he AFK
![afksuffix](/afksuffix.png)

### `format-true`
- Default:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> is now afk"
local: "<gradient:#ffd500:#FFFF00>⌚ Now you're afk"
```

Message if a player has AFK

### `format-false`
- По умолчанию:
```yaml
global: "<gradient:#ffd500:#FFFF00>⌚ <player> isn't afk now"
local: "<gradient:#ffd500:#FFFF00>⌚ Now you're not afk"
```

Message if a player has returned