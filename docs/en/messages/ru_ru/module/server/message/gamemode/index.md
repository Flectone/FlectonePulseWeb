# Gamemode
Path `messages > ru_ru.yml > module.server.message.gamemode`

## Options
Message when using `/gamemode`
![gamemode](/gamemode.png)

## Edit
```yaml
<ru_ru.module.server.message.gamemode>
```

### Default
```yaml
gamemode:
  self:
    creative: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Творческий режим"
    survival: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим выживания"
    adventure: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим приключения"
    spectator: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим наблюдателя"
  other:
    creative: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Творческий режим"
    survival: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим выживания"
    adventure: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим приключения"
    spectator: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим наблюдателя"
```

## Options

- Configuration is here [Gamemode](/en/config/module/server/message/gamemode/)

### `self`
- Default:
```yaml
creative: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Творческий режим"
survival: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим выживания"
adventure: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим приключения"
spectator: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим наблюдателя"
```

Message when changing gamemode to yourself or to recipient when its mode has been changed

### `multiple`
- Default:
```yaml
creative: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Творческий режим"
survival: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим выживания"
adventure: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим приключения"
spectator: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим наблюдателя"
```

Message when changing gamemode to another player