# Капс
Путь `permission.yml > message.format.moderation.caps`

## Пояснение
Категория, отвечающая за настройку прав у форматирования капса в сообщениях игрока

## Редактирование
```yaml
<permission.message.format.moderation.caps>
```

### По умолчанию
```yaml
caps:
  name: "flectonepulse.module.message.format.moderation.caps"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.format.moderation.caps.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.format.moderation.caps.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/format/moderation/caps/)

### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.caps`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.caps.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.caps.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

