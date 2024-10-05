# Комманда /stream
Путь `config.yml > module.command.command-stream`

## Пояснение
Комманда для оповещения о запуске трансляции
![command stream](/commandstream.png)

Если стрим включен, то игроку выдаётся префикс
![command stream prefix](/commandstreamprefix.png)

## Редактирование
```yaml
<config.module.command.command-stream>
```

### По умолчанию
```yaml
command-stream:
  enable: true
  range: -2
  aliases:
    - "stream"
  permission:
    name: "flectonepulse.module.command.stream"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.stream.cooldown.ignore"
      type: OP
  sound:
    enable: true
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.stream.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Stream](/ru/messages/ru_ru/module/command/command-stream/)

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

### `permission`
- Название `flectonepulse.module.command.stream`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.stream.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.command.stream.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->