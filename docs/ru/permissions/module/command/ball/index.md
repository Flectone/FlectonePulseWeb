# Комманда /ball
Путь `permissions.yml > module.command.ball`

## Пояснение
Категория, отвечающая за настройку прав `/ball`

## Редактирование
```yaml
<permissions.module.command.ball>
```

### По умолчанию
```yaml
ball:
  name: "flectonepulse.module.command.ball"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ball.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ball.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/ball/)
- [Сообщения](/ru/messages/ru_ru/module/command/ball/)

### `name`
- По умолчанию `flectonepulse.module.command.ball`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ball.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ball.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

