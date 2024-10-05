# Комманда /broadcast
Путь `config.yml > module.command.command-broadcast`

## Пояснение
Комманда для глобального оповещения
![command broadcast](/commandbroadcast.png)

## Редактирование
```yaml
<config.module.command.command-broadcast>
```

### По умолчанию
```yaml
command-broadcast:
  enable: true
  range: -2
  aliases:
    - "broadcast"
    - "bc"
  permission:
    name: "flectonepulse.module.command.broadcast"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.broadcast.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.broadcast.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Ball](/ru/messages/ru_ru/module/command/command-ball/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию:
```yaml
- "broadcast"
- "bc"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newbroadcast`, `глобально` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.broadcast`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.broadcast.cooldown.ignore`
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
- Название `flectonepulse.module.command.broadcast.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->