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
  range: -1
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/message/quit/)
- [Права](/en/permissions/module/server/message/quit/)

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

<!--@include: @/en/parts/range.md-->
