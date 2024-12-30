# Комманда /clearmail
Путь `permission.yml > command.clearmail`

## Пояснение
Категория, отвечающая за настройку прав `/clearmail`

## Редактирование
```yaml
<permission.command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  name: "flectonepulse.module.command.clearmail"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.clearmail.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.clearmail.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/clearmail/)
- [Локализация](/ru/localizations/ru_ru/command/clearmail/)

### `name`
- По умолчанию `flectonepulse.module.command.clearmail`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.clearmail.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.clearmail.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

