# Комманда /translateto
Путь `permission.yml > command.translateto`

## Пояснение
Категория, отвечающая за настройку прав `/translateto`

## Редактирование
```yaml
<permission.command.translateto>
```

### По умолчанию
```yaml
translateto:
  name: "flectonepulse.module.command.translateto"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.translateto.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.translateto.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/translateto/)
- [Локализация](/ru/localizations/ru_ru/command/translateto/)

### `name`
- По умолчанию `flectonepulse.module.command.translateto`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.translateto.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.translateto.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

