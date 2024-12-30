# Комманда /kick
Путь `permission.yml > command.kick`

## Пояснение
Категория, отвечающая за настройку прав `/kick`

## Редактирование
```yaml
<permission.command.kick>
```

### По умолчанию
```yaml
kick:
  name: "flectonepulse.module.command.kick"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.kick.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.kick.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/kick/)
- [Локализация](/ru/localizations/ru_ru/command/kick/)

### `name`
- По умолчанию `flectonepulse.module.command.kick`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.kick.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.kick.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

