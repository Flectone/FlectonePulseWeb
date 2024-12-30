# Комманда /rockpaperscissors
Путь `permission.yml > command.rockpaperscissors`

## Пояснение
Категория, отвечающая за настройку прав `/rockpaperscissors`

## Редактирование
```yaml
<permission.command.rockpaperscissors>
```

### По умолчанию
```yaml
rockpaperscissors:
  name: "flectonepulse.module.command.rockpaperscissors"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.rockpaperscissors.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.rockpaperscissors.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/rockpaperscissors/)
- [Локализация](/ru/localizations/ru_ru/command/rockpaperscissors/)

### `name`
- По умолчанию `flectonepulse.module.command.rockpaperscissors`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.rockpaperscissors.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.rockpaperscissors.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

