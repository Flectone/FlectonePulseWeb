# МОТД
Путь `config.yml > module.server.motd`

## Пояснение
Модуль отвечающий за приветственное сообщение сервера
![motd](/motd.png)

## Редактирование
```yaml
<config.module.server.motd>
```

### По умолчанию
```yaml
motd:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.motd"
    type: TRUE
  listener:
    ServerListPingEvent: NORMAL
```

## Параметры

- Сообщения изменяются тут [МОТД](/ru/messages/ru_ru/module/server/motd/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение будет выбираться случайным образом, иначе по порядку

### `permission`
- Название `flectonepulse.module.server.motd`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
ServerListPingEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->