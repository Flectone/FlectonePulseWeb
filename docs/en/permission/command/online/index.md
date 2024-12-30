# Комманда /online
Путь `permission.yml > command.online`

## Пояснение
Категория, отвечающая за настройку прав `/online`

## Редактирование
```yaml
<permission.command.online>
```

### По умолчанию
```yaml
online:
  name: "flectonepulse.module.command.online"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.online.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.online.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/online/)
- [Локализация](/ru/localizations/ru_ru/command/online/)

### `name`
- По умолчанию `flectonepulse.module.command.online`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.online.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.online.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

