# Отключение
Путь `config.yml > module.server.message.quit`

## Пояснение
Сообщение от сервера, когда игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<config.module.server.message.quit>
```

### По умолчанию
```yaml
quit:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.quit"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.quit.sound"
      type: TRUE
  listener:
    PlayerQuitEvent: LOWEST
```

## Параметры

- Сообщения изменяются тут [Отключение](/ru/messages/ru_ru/module/server/message/quit/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.quit`
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
- Название `"flectonepulse.module.server.message.quit.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerQuitEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->
