# Комманда /tictactoe
Путь `permissions.yml > module.command.tictactoe`

## Пояснение
Категория, отвечающая за настройку прав `/tictactoe`

## Редактирование
```yaml
<permissions.module.command.tictactoe>
```

### По умолчанию
```yaml
tictactoe:
  name: "flectonepulse.module.command.tictactoe"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.tictactoe.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.tictactoe.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/tictactoe/)
- [Сообщения](/ru/messages/ru_ru/module/command/tictactoe/)

### `name`
- По умолчанию `flectonepulse.module.command.tictactoe`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.tictactoe.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.tictactoe.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

