# Комманда /mark
Путь `permission.yml > command.mark`

## Пояснение
Категория, отвечающая за настройку прав `/mark`

## Редактирование
```yaml
<permission.command.mark>
```

### По умолчанию
```yaml
mark:
  name: "flectonepulse.module.command.mark"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.mark.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mark.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/mark/)

### `name`
- По умолчанию `flectonepulse.module.command.mark`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mark.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mark.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

