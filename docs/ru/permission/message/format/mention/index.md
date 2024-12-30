# Упоминание
Путь `permission.yml > message.format.mention`

## Пояснение
Категория, отвечающая за настройку прав у форматирования упоминаний в сообщениях игрока

## Редактирование
```yaml
<permission.message.format.mention>
```

### По умолчанию
```yaml
mention:
  name: "flectonepulse.module.message.format.mention"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.format.mention.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.format.mention.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/format/mention/)
- [Локализация](/ru/localizations/ru_ru/message/format/mention/)

### `name`
- По умолчанию `flectonepulse.module.message.format.mention`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.mention.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.mention.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

