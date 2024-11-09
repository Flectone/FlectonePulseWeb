# Gamemode
Path `messages > en_us.yml > module.server.message.gamemode`

## Options
Message when using `/gamemode`
![gamemode](/gamemode.png)

## Edit
```yaml
<en_us.module.server.message.gamemode>
```

### Default
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

## Options

- Configuration is here [Gamemode](/en/config/module/server/message/gamemode/)

### `self`
- Default:
```yaml
creative: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Creative Mode"
survival: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Survival Mode"
adventure: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Adventure Mode"
spectator: "<fcolor:1>🗘 Set own game mode to <fcolor:2>Spectator Mode"
```

Message when changing gamemode to yourself or to recipient when its mode has been changed

### `multiple`
- Default:
```yaml
creative: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Creative Mode"
survival: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Survival Mode"
adventure: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Adventure Mode"
spectator: "<fcolor:1>🗘 Set <display_name>'s game mode to <fcolor:2>Spectator Mode"
```

Message when changing gamemode to another player