# Метка
Путь `config.yml > module.interaction.mark`

## Пояснение
Марка создаётся c помощью **ПКМ** и деревянного меча в главной руке
![mark](/mark.gif)

::: info Условие
Меч можно переименовать в наковальне на [доступный цвет](#доступные-цвета), например `RED` и метка будет красной
:::

## Редактирование
```yaml
<config.module.interaction.mark>
```

### По умолчанию
```yaml
mark:
  enable: true
  limit: true
  color: true
  range: 100
  duration: 60
  item: "WOODEN_SWORD"
  entity: "MAGMA_CUBE"
  permission:
    name: "flectonepulse.module.interaction.mark"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.mark.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.mark.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `limit`
- По умолчанию `true`

Не позволяет сделать больше одной метки, пока она существует

### `color`
- По умолчанию `true`

Включает возможность цветных меток. Для этого меч нужно переименовать в один из [доступных цветов](#доступные-цвета)

### `range`
- По умолчанию `100`

Расстояние в блоках, насколько далеко можно разместить метку

### `duration`
- По умолчанию `60`

Сколько времени в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) будет [лимит](#limit)

### `item`
- По умолчанию `WOODEN_SWORD`

Предмет, с помощью которого ставится метка

### `entity`
- По умолчанию `MAGMA_CUBE`

Хитбокс моба, который используется для создания метки

### `permission`
- Название `flectonepulse.module.interaction.mark`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля


### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.interaction.mark.cooldown.ignore`
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
- Название `flectonepulse.module.interaction.mark.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию `PlayerInteractEvent: NORMAL`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->

<!--@include: @/ru/parts/color.md-->