# Режим игры
Путь `localizations > ru_ru.yml > message.gamemode`

## Пояснение
Сообщение при использовании `/gamemode`
![gamemode](/gamemode.png)

## Редактирование
```yaml
<ru_ru.message.gamemode>
```

### По умолчанию
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

## Параметры

- [Сообщения](/ru/message/gamemode/)
- [Права](/ru/permission/message/gamemode/)

### `self`
- По умолчанию:
```yaml
creative: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Творческий режим"
survival: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим выживания"
adventure: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим приключения"
spectator: "<fcolor:1>🗘 Твой режим игры изменён на <fcolor:2>Режим наблюдателя"
```

Сообщение при смене режима игры самому себе или получателю, когда его режим изменён

### `multiple`
- По умолчанию:
```yaml
creative: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Творческий режим"
survival: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим выживания"
adventure: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим приключения"
spectator: "<fcolor:1>🗘 Режим игры игрока <display_name> изменён на <fcolor:2>Режим наблюдателя"
```

Сообщение при смене режима игры другому игроку