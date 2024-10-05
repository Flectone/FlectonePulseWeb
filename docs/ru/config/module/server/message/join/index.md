# Подключение
Путь `config.yml > module.server.message.join`

## Пояснение
Сообщение от сервера, когда игрок подключился
![join](/join.png)

## Редактирование
```yaml
<config.module.server.message.join>
```

### По умолчанию
```yaml
join:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.join"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.join.sound"
      type: TRUE
  listener:
    PlayerJoinEvent: HIGHEST
```

## Параметры

- Сообщения изменяются тут [Подключение](/ru/messages/ru_ru/module/server/message/join/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.join`
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
- Название `"flectonepulse.module.server.message.join.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerJoinEvent: HIGHEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->
