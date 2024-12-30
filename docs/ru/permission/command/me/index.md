# Комманда /me
Путь `permission.yml > command.me`

## Пояснение
Категория, отвечающая за настройку прав `/me`

## Редактирование
```yaml
<permission.command.me>
```

### По умолчанию
```yaml
me:
  name: "flectonepulse.module.command.me"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.me.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.me.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/me/)
- [Локализация](/ru/localizations/ru_ru/command/me/)

### `name`
- По умолчанию `flectonepulse.module.command.me`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.me.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.me.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

