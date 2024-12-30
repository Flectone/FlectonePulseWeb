# Комманда /stream
Путь `permission.yml > command.stream`

## Пояснение
Категория, отвечающая за настройку прав `/stream`

## Редактирование
```yaml
<permission.command.stream>
```

### По умолчанию
```yaml
stream:
  name: "flectonepulse.module.command.stream"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.stream.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.stream.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/stream/)
- [Локализация](/ru/localizations/ru_ru/command/stream/)

### `name`
- По умолчанию `flectonepulse.module.command.stream`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.stream.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.stream.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

