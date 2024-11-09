# Сетблок
Путь `config.yml > module.server.message.setblock`

## Пояснение
Сообщение от сервера при использовании `/setblock`
![setblock](/setblock.png)

## Редактирование
```yaml
<config.module.server.message.setblock>
```

### По умолчанию
```yaml
setblock:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.setblock"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.setblock.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Сетблок](/ru/messages/ru_ru/module/server/message/setblock/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.setblock`
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
- Название `flectonepulse.module.server.message.setblock.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
