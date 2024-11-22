# Комманда /stream
Путь `permissions.yml > module.command.stream`

## Пояснение
Категория, отвечающая за настройку прав `/stream`

## Редактирование
```yaml
<permissions.module.command.stream>
```

### По умолчанию
```yaml
stream:
  name: "flectonepulse.module.command.stream"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.stream.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.stream.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/stream/)
- [Сообщения](/en/messages/ru_ru/module/command/stream/)

### `name`
- По умолчанию `flectonepulse.module.command.stream`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.stream.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.stream.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

