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
  range: -1
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/message/death/)
- [Права](/ru/permissions/module/server/message/death/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-1`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::

<!--@include: @/ru/parts/range.md-->
