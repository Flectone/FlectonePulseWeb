# Комманда /maintenance
Путь `config.yml > module.command.command-maintenance`

## Пояснение
Комманда для включения технических работ
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

## Редактирование
```yaml
<config.module.command.command-maintenance>
```

### По умолчанию
```yaml
command-maintenance:
  enable: true
  turned-on: false
  aliases:
    - "maintenance"
  permission:
    name: "flectonepulse.module.command.maintenance"
    type: OP
  permission-join:
    name: "flectonepulse.module.command.maintenance.join"
    type: OP
  listener:
    AsyncPlayerPreLoginEvent: LOWEST
    ServerListPingEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.maintenance.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.maintenance.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Maintenance](/ru/messages/ru_ru/module/command/command-maintenance/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `turned-on`
- По умолчанию `false`

Включает или выключает технические работы на сервере

### `aliases`
- По умолчанию `maintenance`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmaintenance`, `техническиеработы` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.maintenance`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `permission-join`
- Название `flectonepulse.module.command.maintenance.join`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для того, чтобы заходить на сервер, когда он на технических работах

### `listener`
- По умолчанию:
```yaml
AsyncPlayerPreLoginEvent: LOWEST
ServerListPingEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.maintenance.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.command.maintenance.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/listener.md-->