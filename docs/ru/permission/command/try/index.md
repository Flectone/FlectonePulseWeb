# Комманда /try
Путь `permission.yml > command.try`

## Пояснение
Категория, отвечающая за настройку прав `/try`

## Редактирование
```yaml
<permission.command.try>
```

### По умолчанию
```yaml
try:
  name: "flectonepulse.module.command.try"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.try.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.try.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/try/)
- [Локализация](/ru/localizations/ru_ru/command/try/)

### `name`
- По умолчанию `flectonepulse.module.command.try`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.try.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.try.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

