# Комманда /helper
Путь `config.yml > module.command.command-helper`

## Пояснение
Комманда для того, чтобы попросить помощь
![command helper](/commandhelper.png)

От лица помощника
![command helper player](/commandhelperadmin.png)

## Редактирование
```yaml
<config.module.command.command-helper>
```

### По умолчанию
```yaml
command-helper:
  enable: true
  range: -2
  aliases:
    - "helper"
  permission:
    name: "flectonepulse.module.command.helper"
    type: TRUE
  permission-see:
    name: "flectonepulse.module.command.helper.see"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.helper.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.helper.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Helper](/ru/messages/ru_ru/module/command/command-helper/)

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

### `permission`
- Название `flectonepulse.module.command.helper`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `permission-see`
- Название `flectonepulse.module.command.helper.see`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для того, чтобы видеть запросы о помощи

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.helper.cooldown.ignore`
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
- Название `flectonepulse.module.command.helper.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->