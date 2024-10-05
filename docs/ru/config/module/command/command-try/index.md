# Комманда /try
Путь `config.yml > module.command.command-try`

## Пояснение
Комманда для отображения выполнения действия с шансом
![command try](/commandtry.png)

## Редактирование
```yaml
<config.module.command.command-try>
```

### По умолчанию
```yaml
command-try:
  enable: true
  range: -2
  min: 0
  max: 100
  good: 50
  aliases:
    - "try"
  permission:
    name: "flectonepulse.module.command.try"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.try.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.try.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Try](/ru/messages/ru_ru/module/command/command-try/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `min`
- По умолчанию `0`

Минимальный шанс выполнения действия

### `max`
- По умолчанию `100`

Максимальный шанс выполнения действия

### `good`
- По умолчанию `50`

Шанс выполнения действия, с которого считается, что оно выполнено успешно

### `aliases`
- По умолчанию `try`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newtry`, `трай` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.try`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.try.cooldown.ignore`
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
- Название `flectonepulse.module.command.try.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->