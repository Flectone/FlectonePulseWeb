# Имя в списке
Путь `config.yml > module.server.tab.player-list-name`

## Пояснение
Модуль, отвечающий за имя игрока в ТАБе
![player list name](/playerlistname.png)

## Редактирование
```yaml
<config.module.server.tab.player-list-name>
```

### По умолчанию
```yaml
player-list-name:
  enable: true
  permission:
    name: "flectonepulse.module.server.tab.player_list_name"
    type: TRUE
  listener:
    PlayerChangedWorldEvent: MONITOR
  ticker:
    enable: true
    period: 100
```

## Параметры

- Сообщение изменяется тут [Имя в списке](/ru/messages/ru_ru/module/server/tab/player-list-name/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.tab.player_list_name`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
PlayerChangedWorldEvent: MONITOR
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

### `ticker`
- `enable: true`

Нужно ли обновлять имя в ТАБе раз в какой-то промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно обновлять имя

<!--@include: @/ru/parts/listener.md-->