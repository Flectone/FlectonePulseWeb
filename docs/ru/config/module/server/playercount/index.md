# Количество игроков
Путь `config.yml > module.server.playercount`

## Пояснение
Модуль отвечающий за количество игроков на сервере
![player count](/playercount.png)

## Редактирование
```yaml
<config.module.server.playercount>
```

### По умолчанию
```yaml
playercount:
  enable: true
  control: true
  max: 69
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/playercount/)
- [Права](/ru/permissions/module/server/playercount/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `control`
- По умолчанию `true`

Если включено, то игрока не будет впускать на сервер при большем количестве игроков, чем [указано](#number)

### `max`
- По умолчанию `69`

Максимальное количество игроков на сервере