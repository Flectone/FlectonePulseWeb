# Комманда /rockpaperscissors
Путь `permissions.yml > module.command.rockpaperscissors`

## Пояснение
Категория, отвечающая за настройку прав `/rockpaperscissors`

## Редактирование
```yaml
<permissions.module.command.rockpaperscissors>
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

- [Конфиг](/ru/config/module/command/rockpaperscissors/)
- [Сообщения](/ru/messages/ru_ru/module/command/rockpaperscissors/)

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

