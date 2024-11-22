# Комманда /kick
Путь `commands.yml > module.command.kick`

## Пояснение
Комманда для исключения игрока с сервера
![command kick](/commandkick.png)

От лица игрока
![command kick player](/commandkickplayer.png)

## Редактирование
```yaml
<commands.module.command.kick>
```

### По умолчанию
```yaml
kick:
  enable: true
  range: -2
  aliases:
    - "kick"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/command/kick/)
- [Права](/en/permissions/module/command/kick/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `kick`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newkick`, `исключить` и т.д.
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

<!--@include: @/en/parts/range.md-->