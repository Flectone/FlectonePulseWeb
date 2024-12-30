# Комманда /translateto
Путь `command.yml > translateto`

## Пояснение
Комманда для перевода сообщения с одного языка на другой
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<command.translateto>
```

### По умолчанию
```yaml
translateto:
  enable: true
  range: -2
  aliases:
    - "translateto"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/translateto/)
- [Права](/ru/permission/command/translateto/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `translateto`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newtranslateto`, `перевести` и т.д.
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