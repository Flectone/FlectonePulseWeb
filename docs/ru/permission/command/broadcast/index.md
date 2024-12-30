# Комманда /broadcast
Путь `permission.yml > command.broadcast`

## Пояснение
Категория, отвечающая за настройку прав `/broadcast`

## Редактирование
```yaml
<permission.command.broadcast>
```

### По умолчанию
```yaml
broadcast:
  name: "flectonepulse.module.command.broadcast"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.broadcast.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.broadcast.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/broadcast/)
- [Локализация](/ru/localizations/ru_ru/command/broadcast/)

### `name`
- По умолчанию `flectonepulse.module.command.broadcast`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.broadcast.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.broadcast.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

