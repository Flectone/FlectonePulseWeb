# Комманда /spit
Путь `permissions.yml > module.command.spit`

## Пояснение
Категория, отвечающая за настройку прав `/spit`

## Редактирование
```yaml
<permissions.module.command.spit>
```

### По умолчанию
```yaml
spit:
  name: "flectonepulse.module.command.spit"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.spit.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.spit.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/spit/)

### `name`
- По умолчанию `flectonepulse.module.command.spit`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spit.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spit.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

