# Комманда /ignorelist
Путь `permission.yml > command.ignorelist`

## Пояснение
Категория, отвечающая за настройку прав `/ignorelist`

## Редактирование
```yaml
<permission.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  name: "flectonepulse.module.command.ignorelist"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ignorelist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ignorelist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/ignorelist/)
- [Локализация](/ru/localizations/ru_ru/command/ignorelist/)

### `name`
- По умолчанию `flectonepulse.module.command.ignorelist`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignorelist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignorelist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

