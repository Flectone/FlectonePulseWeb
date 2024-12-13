# Игроки
Путь `config.yml > module.server.status.players`

## Пояснение
Модуль отвечающий за количество игроков на сервере
![player count](/playercount.png)

## Редактирование
```yaml
<config.module.server.status.players>
```

### По умолчанию
```yaml
players:
  enable: false
  control: true
  max: 69
  online: -69
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/status/players/)
- [Права](/en/permissions/module/server/status/players/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `control`
- По умолчанию `true`

Если включено, то игрока не будет впускать на сервер при большем количестве игроков, чем [указано](#max)

### `max`
- По умолчанию `69`

Максимальное количество игроков на сервере

### `online`
- По умолчанию `-69`

Число, которое позволяет указать любой онлайн на сервере

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-69` указывает на текущий онлайн

:::