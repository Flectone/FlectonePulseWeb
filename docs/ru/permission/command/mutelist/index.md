# Комманда /mutelist
Путь `permission.yml > command.mutelist`

## Пояснение
Категория, отвечающая за настройку прав `/mutelist`

## Редактирование
```yaml
<permission.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  name: "flectonepulse.module.command.mutelist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.mutelist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mutelist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/mutelist/)
- [Локализация](/ru/localizations/ru_ru/command/mutelist/)

### `name`
- По умолчанию `flectonepulse.module.command.mutelist`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mutelist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mutelist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

