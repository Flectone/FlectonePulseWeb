# Комманда /spy
Путь `permission.yml > command.spy`

## Пояснение
Категория, отвечающая за настройку прав `/spy`

## Редактирование
```yaml
<permission.command.spy>
```

### По умолчанию
```yaml
spy:
  name: "flectonepulse.module.command.spy"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.spy.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.spy.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/spy/)
- [Локализация](/ru/localizations/ru_ru/command/spy/)

### `name`
- По умолчанию `flectonepulse.module.command.spy`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spy.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spy.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

