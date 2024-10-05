# Комманда /kick
Путь `config.yml > module.command.command-kick`

## Пояснение
Комманда для исключения игрока с сервера
![command kick](/commandkick.png)

От лица игрока
![command kick player](/commandkickplayer.png)

## Редактирование
```yaml
<config.module.command.command-kick>
```

### По умолчанию
```yaml
command-kick:
  enable: true
  range: -2
  aliases:
    - "kick"
  permission:
    name: "flectonepulse.module.command.kick"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.kick.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.kick.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Kick](/ru/messages/ru_ru/module/command/command-kick/)

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

### `permission`
- Название `flectonepulse.module.command.kick`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.kick.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.command.kick.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->