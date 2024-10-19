# Команда
Путь `config.yml > module.player.team`

## Пояснение
Модуль, отвечающий за [ScoreBoard команду](https://ru.minecraft.wiki/w/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B_%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8/team) игрока

## Редактирование
```yaml
<config.module.player.team>
```

### По умолчанию
```yaml
team:
  enable: true
  name-visible: false
  prefix: "<vault_prefix><stream_prefix>"
  suffix: "<afk_suffix><vault_suffix>"
  color: "<white>"
  permission:
    name: "flectonepulse.module.player.team"
    type: TRUE
  listener:
    PlayerJoinEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `name-visible`
- По умолчанию `false`

Включает или выключает ник над игроком

### `prefix`
- По умолчанию `<prefix>`

Текст до ника игрока: `текст TheFaser`

### `suffix`
- По умолчанию `<suffix>`

Текст после ника игрока: `TheFaser текст`

### `color`
- По умолчанию `<white>`

Цвет команды игрока из [доступных](#доступные-цвета)

### `permission`
- Название `flectonepulse.module.player.team`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
AsyncPlayerChatEvent: MONITOR
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/color.md-->

<!--@include: @/ru/parts/listener.md-->