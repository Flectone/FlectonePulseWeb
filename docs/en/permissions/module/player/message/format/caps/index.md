# Капс
Путь `permissions.yml > module.player.message.format.caps`

## Пояснение
Категория, отвечающая за настройку прав у форматирования капса в сообщениях игрока

## Редактирование
```yaml
<permissions.module.player.message.format.caps>
```

### По умолчанию
```yaml
caps:
  name: "flectonepulse.module.player.message.format.caps"
  type: TRUE
  bypass:
    name: "flectonepulse.module.player.message.format.caps.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.player.message.format.caps.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/player/message/format/caps/)

### `name`
- По умолчанию `flectonepulse.module.player.message.format.caps`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.caps.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.caps.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

