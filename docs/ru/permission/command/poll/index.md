# Комманда /poll
Путь `permission.yml > command.poll`

## Пояснение
Категория, отвечающая за настройку прав `/poll`

## Редактирование
```yaml
<permission.command.poll>
```

### По умолчанию
```yaml
poll:
  name: "flectonepulse.module.command.poll"
  type: TRUE
  create:
    name: "flectonepulse.module.command.poll.create"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.poll.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.poll.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/poll/)
- [Локализация](/ru/localizations/ru_ru/command/poll/)

### `name`
- По умолчанию `flectonepulse.module.command.poll`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `create`

Право для создания голосований

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.poll.create`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.poll.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.poll.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

