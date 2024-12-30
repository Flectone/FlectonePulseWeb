# Комманда /mute
Путь `command.yml > mute`

## Пояснение
Комманда для того, чтобы замутить игрока
![command mute](/commandmute.png)

## Редактирование
```yaml
<command.mute>
```

### По умолчанию
```yaml
mute:
  enable: true
  suggest-offline-players: true
  range: -2
  aliases:
    - "mute"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/mute/)
- [Права](/ru/permission/command/mute/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `suggest-offline-players`
- По умолчанию `true`

Если включено, то подсказывает все ники игроков, кто был на сервере, иначе только ники игроков, которые в сети
::: tip ИНФОРМАЦИЯ
Это влияет только на подсказку текста
:::

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `mute`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmute`, `замутить` и т.д.
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