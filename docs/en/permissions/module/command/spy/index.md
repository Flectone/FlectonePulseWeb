# Комманда /spy
Путь `permissions.yml > module.command.spy`

## Пояснение
Категория, отвечающая за настройку прав `/spy`

## Редактирование
```yaml
<permissions.module.command.spy>
```

### По умолчанию
```yaml
spy:
  name: "flectonepulse.module.command.spy"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.spy.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.spy.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/spy/)
- [Сообщения](/en/messages/ru_ru/module/command/spy/)

### `name`
- По умолчанию `flectonepulse.module.command.spy`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spy.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.spy.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

