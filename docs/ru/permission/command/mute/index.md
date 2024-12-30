# Комманда /mute
Путь `permission.yml > command.mute`

## Пояснение
Категория, отвечающая за настройку прав `/mute`

## Редактирование
```yaml
<permission.command.mute>
```

### По умолчанию
```yaml
mute:
  name: "flectonepulse.module.command.mute"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.mute.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mute.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/mute/)
- [Локализация](/ru/localizations/ru_ru/command/mute/)

### `name`
- По умолчанию `flectonepulse.module.command.mute`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mute.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mute.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

