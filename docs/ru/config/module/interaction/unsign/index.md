# Снятие подписи
Путь `config.yml > module.interaction.unsign`

## Пояснение
Снятие подписи происходит с помощью **ЛКМ** на точиле, если игрок держит в **главной** руке предмет с подписью
![unsign](/unsign.gif)

::: info Условие
Игрок может снять только свою подпись
:::

## Редактирование
```yaml
<config.module.interaction.unsign>
```

### По умолчанию
```yaml
unsign:
  enable: false
  drop-dye: true
  block: "GRINDSTONE"
  permission:
    name: "flectonepulse.module.interaction.unsign"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.unsign.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.unsign.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `drop-dye`
- По умолчанию `true`

Включает выкидывание красителя, который использовался при подписи
![unsign](/unsign.gif)

### `block`
- По умолчанию `GRINDSTONE`

Блок, на который нужно нажать, для снятия подписи

### `permission`
- Название `flectonepulse.module.interaction.unsign`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля


### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.interaction.unsign.cooldown.ignore`
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
- Название `flectonepulse.module.interaction.unsign.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию `PlayerInteractEvent: NORMAL`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->