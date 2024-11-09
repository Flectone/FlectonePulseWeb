# Спавнпоинт
Путь `config.yml > module.server.message.spawnpoint`

## Пояснение
Сообщение от сервера при использовании `/spawnpoint`
![spawnpoint](/spawnpoint.png)

## Редактирование
```yaml
<config.module.server.message.spawnpoint>
```

### По умолчанию
```yaml
spawnpoint:
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

## Options

- Сообщения изменяются тут [Спавнпоинт](/ru/messages/ru_ru/module/server/message/spawnpoint/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.spawnpoint`
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
- Название `flectonepulse.module.server.message.spawnpoint.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
