# Комманда /geolocate
Путь `permissions.yml > module.command.geolocate`

## Пояснение
Категория, отвечающая за настройку прав `/geolocate`

## Редактирование
```yaml
<permissions.module.command.geolocate>
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

- [Конфиг](/en/config/module/command/geolocate/)
- [Сообщения](/en/messages/ru_ru/module/command/geolocate/)

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

<!--@include: @/en/parts/permission.md-->

