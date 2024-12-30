# Смерть
Путь `message.yml > death`

## Пояснение
Сообщение от сервера, когда игрок умирает
![death server](/deathserver.png)
![death player](/deathplayer.png)

## Редактирование
```yaml
<message.death>
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

- [Локализация](/ru/localizations/ru_ru/message/death/)
- [Права](/ru/permission/message/death/)

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
