# Количество игроков
Путь `config.yml > module.server.player-count`

## Пояснение
Модуль отвечающий за количество игроков на сервере
![player count](/playercount.png)

## Редактирование
```yaml
<config.module.server.player-count>
```

### По умолчанию
```yaml
player-count:
  enable: true
  control: true
  number: 69
  permission:
    name: "flectonepulse.module.server.player_count"
    type: TRUE
  permission-ignore:
    name: "flectonepulse.module.server.player_count.ignore"
    type: TRUE
  listener:
    ServerListPingEvent: NORMAL
    PlayerLoginEvent: NORMAL
```

## Параметры

- Сообщение о полном сервере изменяется тут [Количество игроков](/ru/messages/ru_ru/module/server/player-count/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `control`
- По умолчанию `true`

Если включено, то игрока не будет впускать на сервер при большем количестве игроков, чем [указано](#number)

### `number`
- По умолчанию `69`

Максимальное количество игроков на сервере

### `permission`
- Название `flectonepulse.module.server.player_count`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `permission-ignore`
- Название `flectonepulse.module.server.player_count.ignore`
- Тип `TRUE`

Право для игнорирования [максимального количества игроков](#control)

### `listener`
- По умолчанию:
```yaml
ServerListPingEvent: NORMAL
PlayerLoginEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->