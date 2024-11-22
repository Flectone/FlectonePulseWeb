# Упоминание
Путь `permissions.yml > module.player.message.format.mention`

## Пояснение
Категория, отвечающая за настройку прав у форматирования упоминаний в сообщениях игрока

## Редактирование
```yaml
<permissions.module.player.message.format.mention>
```

### По умолчанию
```yaml
mention:
  name: "flectonepulse.module.player.message.format.mention"
  type: TRUE
  bypass:
    name: "flectonepulse.module.player.message.format.mention.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.player.message.format.mention.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/player/message/format/mention/)
- [Сообщения](/en/messages/ru_ru/module/player/message/format/mention/)

### `name`
- По умолчанию `flectonepulse.module.player.message.format.mention`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для игнорирования форматирования

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.mention.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.mention.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

