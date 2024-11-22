# Режим игры
Путь `messages > en_us.yml > module.server.message.gamemode`

## Пояснение
Сообщение при использовании `/gamemode`
![gamemode](/gamemode.png)

## Редактирование
```yaml
<en_us.module.server.message.gamemode>
```

### По умолчанию
```yaml
gamemode:
  self:
    creative: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Creative Mode"
    survival: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Survival Mode"
    adventure: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Adventure Mode"
    spectator: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Spectator Mode"
  other:
    creative: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Creative Mode"
    survival: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Survival Mode"
    adventure: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Adventure Mode"
    spectator: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Spectator Mode"
```

## Параметры

- [Конфиг](/ru/config/module/server/message/gamemode/)
- [Права](/ru/permissions/module/server/message/gamemode/)

### `self`
- По умолчанию:
```yaml
creative: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Creative Mode"
survival: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Survival Mode"
adventure: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Adventure Mode"
spectator: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Spectator Mode"
```

Сообщение при смене режима игры самому себе или получателю, когда его режим изменён

### `multiple`
- По умолчанию:
```yaml
creative: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Creative Mode"
survival: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Survival Mode"
adventure: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Adventure Mode"
spectator: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Spectator Mode"
```

Сообщение при смене режима игры другому игроку