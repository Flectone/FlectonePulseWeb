# Комманда /warn
Путь `permission.yml > command.warn`

## Пояснение
Категория, отвечающая за настройку прав `/warn`

## Редактирование
```yaml
<permission.command.warn>
```

### По умолчанию
```yaml
warn:
  name: "flectonepulse.module.command.warn"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.warn.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.warn.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/warn/)
- [Локализация](/ru/localizations/ru_ru/command/warn/)

### `name`
- По умолчанию `flectonepulse.module.command.warn`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warn.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warn.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

