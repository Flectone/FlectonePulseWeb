# Комманда /helper
Путь `command.yml > helper`

## Пояснение
Комманда для того, чтобы попросить помощь
![command helper](/commandhelper.png)

От лица помощника
![command helper player](/commandhelperadmin.png)

## Редактирование
```yaml
<command.helper>
```

### По умолчанию
```yaml
helper:
  enable: true
  range: -2
  aliases:
    - "helper"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/helper/)
- [Права](/ru/permission/command/helper/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `helper`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newhelper`, `помощь` и т.д.
:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::

<!--@include: @/ru/parts/range.md-->