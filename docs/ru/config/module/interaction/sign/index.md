# Подпись
Путь `config.yml > module.interaction.sign`

## Пояснение
Подпись создаётся на предмете с помощью **ЛКМ** по наковальне, если игрок держит в **дополнительной** руке краситель и в **главной** предмет
![sign](/sign.gif)

## Редактирование
```yaml
<config.module.interaction.sign>
```

### По умолчанию
```yaml
sign:
  enable: false
  drop-dye: true
  block: "ANVIL"
  permission:
    name: "flectonepulse.module.interaction.sign"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.sign.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.interaction.sign.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Параметры

- Сообщение подписи изменяется тут [Подпись](/ru/messages/ru_ru/module/interaction/sign/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `drop-dye`
- По умолчанию `true`

Включает выкидывание красителя прошлой подписи, если подпись переделывается
![resign](/resign.gif)

### `block`
- По умолчанию `ANVIL`

Блок, на который нужно нажать, для подписи

### `permission`
- Название `flectonepulse.module.interaction.sign`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля


### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.interaction.sign.cooldown.ignore`
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
- Название `flectonepulse.module.interaction.sign.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию `PlayerInteractEvent: NORMAL`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->