# Комманда /unwarn
Путь `permissions.yml > module.command.unwarn`

## Пояснение
Категория, отвечающая за настройку прав `/unwarn`

## Редактирование
```yaml
<permissions.module.command.unwarn>
```

### По умолчанию
```yaml
unwarn:
  name: "flectonepulse.module.command.unwarn"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.unwarn.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.unwarn.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/unwarn/)
- [Сообщения](/ru/messages/ru_ru/module/command/unwarn/)

### `name`
- По умолчанию `flectonepulse.module.command.unwarn`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unwarn.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unwarn.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

