# Комманда /maintenance
Путь `permission.yml > command.maintenance`

## Пояснение
Категория, отвечающая за настройку прав `/maintenance`

## Редактирование
```yaml
<permission.command.maintenance>
```

### По умолчанию
```yaml
maintenance:
  name: "flectonepulse.module.command.maintenance"
  type: OP
  join:
    name: "flectonepulse.module.command.maintenance.join"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.maintenance.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.maintenance.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/maintenance/)
- [Локализация](/ru/localizations/ru_ru/command/maintenance/)

### `name`
- По умолчанию `flectonepulse.module.command.maintenance`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `join`

Право для подключения к серверу во время технических работ

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.maintenance.join`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.maintenance.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.maintenance.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

