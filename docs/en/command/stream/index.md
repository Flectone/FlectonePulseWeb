# Комманда /stream
Путь `command.yml > stream`

## Пояснение
Комманда для оповещения о запуске трансляции
![command stream](/commandstream.png)

Если стрим включен, то игроку выдаётся префикс
![command stream prefix](/commandstreamprefix.png)

## Редактирование
```yaml
<command.stream>
```

### По умолчанию
```yaml
stream:
  enable: true
  range: -2
  aliases:
    - "stream"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: true
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/stream/)
- [Права](/ru/permission/command/stream/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `stream`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newstream`, `стрим` и т.д.
:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::

<!--@include: @/ru/parts/range.md-->