# Комманда /dice
Путь `config.yml > module.command.command-dice`

## Пояснение
Комманда для броска кубиков на удачу
![command dice](/commanddice.png)

## Редактирование
```yaml
<config.module.command.command-dice>
```

### По умолчанию
```yaml
command-dice:
  enable: true
  range: -2
  min: 1
  max: 6
  aliases:
    - "dice"
  permission:
    name: "flectonepulse.module.command.dice"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.dice.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.dice.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Dice](/ru/messages/ru_ru/module/command/command-dice/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `min`
- По умолчанию `1`

Минимальное количество кубиков

### `max`
- По умолчанию `6`

Максимальное количество кубиков

### `aliases`
- По умолчанию `dice`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newdice`, `кубик` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.dice`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.dice.cooldown.ignore`
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
- Название `flectonepulse.module.command.dice.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->