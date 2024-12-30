# Упоминание
Путь `permission.yml > message.format.moderation.swear`

## Пояснение
Категория, отвечающая за настройку прав у форматирования запреток в сообщениях игрока

## Редактирование
```yaml
<permission.message.format.moderation.swear>
```

### По умолчанию
```yaml
swear:
  name: "flectonepulse.module.message.format.moderation.swear"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.format.moderation.swear.bypass"
    type: OP
  see:
    name: "flectonepulse.module.message.format.moderation.swear.see"
    type: OP
  sound:
    name: "flectonepulse.module.message.format.moderation.swear.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/format/moderation/swear/)
- [Локализация](/ru/localizations/ru_ru/message/format/moderation/swear/)

### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.swear`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.swear.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `see`

Право для просмотра содержимого в запрещённом слое
::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.swear.see`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.moderation.swear.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

