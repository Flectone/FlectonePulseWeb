# Приветствие
Путь `config.yml > module.server.message.greeting`

## Пояснение
Сообщение от сервера лично игроку, когда он подключился
![greeting](/greeting.png)

## Редактирование
```yaml
<config.module.server.message.greeting>
```

### По умолчанию
```yaml
greeting:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.greeting"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.greeting.sound"
      type: TRUE
  listener:
    PlayerJoinEvent: MONITOR
```

## Параметры

- Сообщения изменяются тут [Приветствие](/ru/messages/ru_ru/module/server/message/greeting/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.greeting`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

### `permission`
- Название `"flectonepulse.module.server.message.greeting.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerJoinEvent: MONITOR
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->
