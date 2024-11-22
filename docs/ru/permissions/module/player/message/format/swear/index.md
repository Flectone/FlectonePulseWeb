# Упоминание
Путь `permissions.yml > module.player.message.format.swear`

## Пояснение
Категория, отвечающая за настройку прав у форматирования запреток в сообщениях игрока

## Редактирование
```yaml
<permissions.module.player.message.format.swear>
```

### По умолчанию
```yaml
swear:
  name: "flectonepulse.module.player.message.format.swear"
  type: TRUE
  bypass:
    name: "flectonepulse.module.player.message.format.swear.bypass"
    type: OP
  see:
    name: "flectonepulse.module.player.message.format.swear.see"
    type: OP
  sound:
    name: "flectonepulse.module.player.message.format.swear.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/player/message/format/swear/)
- [Сообщения](/ru/messages/ru_ru/module/player/message/format/swear/)

### `name`
- По умолчанию `flectonepulse.module.player.message.format.swear`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.swear.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `see`

Право для просмотра содержимого в запрещённом слое
::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.swear.see`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.swear.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

