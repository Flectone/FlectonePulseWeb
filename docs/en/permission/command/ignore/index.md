# Комманда /ignore
Путь `permission.yml > command.ignore`

## Пояснение
Категория, отвечающая за настройку прав `/ignore`

## Редактирование
```yaml
<permission.command.ignore>
```

### По умолчанию
```yaml
ignore:
  name: "flectonepulse.module.command.ignore"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ignore.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ignore.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/ignore/)
- [Локализация](/ru/localizations/ru_ru/command/ignore/)

### `name`
- По умолчанию `flectonepulse.module.command.ignore`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignore.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignore.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

