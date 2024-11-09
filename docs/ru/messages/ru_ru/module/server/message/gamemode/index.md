# Режим игры
Путь `messages > ru_ru.yml > module.server.message.gamemode`

## Пояснение
Сообщение при использовании `/gamemode`
![gamemode](/gamemode.png)

## Редактирование
```yaml
<ru_ru.module.server.message.gamemode>
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

- Конфигурация происходит тут [Режим игры](/ru/config/module/server/message/gamemode/)

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