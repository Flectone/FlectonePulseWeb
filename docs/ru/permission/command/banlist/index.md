# Комманда /banlist
Путь `permission.yml > command.banlist`

## Пояснение
Категория, отвечающая за настройку прав `/banlist`

## Редактирование
```yaml
<permission.command.banlist>
```

### По умолчанию
```yaml
banlist:
  name: "flectonepulse.module.command.banlist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.banlist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.banlist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/banlist/)
- [Локализация](/ru/localizations/ru_ru/command/banlist/)

### `name`
- По умолчанию `flectonepulse.module.command.banlist`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.banlist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.banlist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

