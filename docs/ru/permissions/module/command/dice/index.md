# Комманда /dice
Путь `permissions.yml > module.command.dice`

## Пояснение
Категория, отвечающая за настройку прав `/dice`

## Редактирование
```yaml
<permissions.module.command.dice>
```

### По умолчанию
```yaml
dice:
  name: "flectonepulse.module.command.dice"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.dice.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.dice.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/dice/)
- [Сообщения](/ru/messages/ru_ru/module/command/dice/)

### `name`
- По умолчанию `flectonepulse.module.command.dice`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.dice.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.dice.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

