# Комманда /geolocate
Путь `permission.yml > command.geolocate`

## Пояснение
Категория, отвечающая за настройку прав `/geolocate`

## Редактирование
```yaml
<permission.command.geolocate>
```

### По умолчанию
```yaml
geolocate:
  name: "flectonepulse.module.command.geolocate"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.geolocate.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.geolocate.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/geolocate/)
- [Локализация](/ru/localizations/ru_ru/command/geolocate/)

### `name`
- По умолчанию `flectonepulse.module.command.geolocate`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.geolocate.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.geolocate.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

