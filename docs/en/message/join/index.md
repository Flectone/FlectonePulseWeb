# Подключение
Путь `message.yml > join`

## Пояснение
Сообщение от сервера, когда игрок подключился
![join](/join.png)

## Редактирование
```yaml
<message.join>
```

### По умолчанию
```yaml
join:
  enable: true
  first: true
  range: -1
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/join/)
- [Права](/ru/permission/message/join/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `first`
- По умолчанию `true`

Включает сообщение о самом первом подключении игрока на сервер

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
