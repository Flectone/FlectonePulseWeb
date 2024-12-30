# Комманда /warnlist
Путь `permission.yml > command.warnlist`

## Пояснение
Категория, отвечающая за настройку прав `/warnlist`

## Редактирование
```yaml
<permission.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  name: "flectonepulse.module.command.warnlist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.warnlist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.warnlist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/warnlist/)
- [Локализация](/ru/localizations/ru_ru/command/warnlist/)

### `name`
- По умолчанию `flectonepulse.module.command.warnlist`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warnlist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warnlist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

