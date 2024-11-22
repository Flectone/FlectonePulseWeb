# Комманда /clearchat
Путь `permissions.yml > module.command.clearchat`

## Пояснение
Категория, отвечающая за настройку прав `/clearchat`

## Редактирование
```yaml
<permissions.module.command.clearchat>
```

### По умолчанию
```yaml
clearchat:
  name: "flectonepulse.module.command.clearchat"
  type: TRUE
  other:
    name: "flectonepulse.module.command.clearchat.other"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.clearchat.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.clearchat.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/clearchat/)
- [Сообщения](/en/messages/ru_ru/module/command/clearchat/)

### `name`
- По умолчанию `flectonepulse.module.command.clearchat`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `other`

Право для изменения цвета другому игроку

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.clearchat.other`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.clearchat.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.clearchat.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

