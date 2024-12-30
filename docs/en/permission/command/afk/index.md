# Комманда /afk
Путь `permission.yml > command.afk`

## Пояснение
Категория, отвечающая за настройку прав `/afk`

## Редактирование
```yaml
<permission.command.afk>
```

### По умолчанию
```yaml
afk:
  name: "flectonepulse.module.command.afk"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.afk.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.afk.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/afk/)

### `name`
- По умолчанию `flectonepulse.module.command.afk`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.afk.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.afk.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

