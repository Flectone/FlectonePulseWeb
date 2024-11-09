# Режим игры
Путь `config.yml > module.server.message.gamemode`

## Пояснение
Сообщение от сервера, когда игрок изменил режим игры
![gamemode](/gamemode.png)

## Редактирование
```yaml
<config.module.server.message.gamemode>
```

### По умолчанию
```yaml
gamemode:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.gamemode"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.gamemode.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Режим игры](/ru/messages/ru_ru/module/server/message/gamemode/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.gamemode`
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
- Название `flectonepulse.module.server.message.gamemode.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
