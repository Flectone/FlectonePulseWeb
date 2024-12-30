# Комманда /flectonepulse
Путь `permission.yml > command.flectonepulse`

## Пояснение
Категория, отвечающая за настройку прав `/flectonepulse`

## Редактирование
```yaml
<permission.command.flectonepulse>
```

### По умолчанию
```yaml
flectonepulse:
  name: "flectonepulse.module.command.flectonepulse"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.flectonepulse.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.flectonepulse.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/flectonepulse/)
- [Локализация](/ru/localizations/ru_ru/command/flectonepulse/)

### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

