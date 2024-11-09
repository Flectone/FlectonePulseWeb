# Смерть
Путь `config.yml > module.server.message.death`

## Пояснение
Сообщение от сервера, когда игрок умирает
![death server](/deathserver.png)
![death player](/deathplayer.png)

## Редактирование
```yaml
<config.module.server.message.death>
```

### По умолчанию
```yaml
death:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.death"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.death.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Смерть](/ru/messages/ru_ru/module/server/message/death/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.death`
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
- Название `"flectonepulse.module.server.message.death.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
