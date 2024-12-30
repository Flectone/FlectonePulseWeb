# Комманда /symbol
Путь `permission.yml > command.symbol`

## Пояснение
Категория, отвечающая за настройку прав `/symbol`

## Редактирование
```yaml
<permission.command.symbol>
```

### По умолчанию
```yaml
symbol:
  name: "flectonepulse.module.command.symbol"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.symbol.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.symbol.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/symbol/)
- [Локализация](/ru/localizations/ru_ru/command/symbol/)

### `name`
- По умолчанию `flectonepulse.module.command.symbol`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.symbol.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.symbol.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

