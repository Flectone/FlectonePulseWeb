# Комманда /unmute
Путь `permissions.yml > module.command.unmute`

## Пояснение
Категория, отвечающая за настройку прав `/unmute`

## Редактирование
```yaml
<permissions.module.command.unmute>
```

### По умолчанию
```yaml
unmute:
  name: "flectonepulse.module.command.unmute"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.unmute.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.unmute.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/unmute/)
- [Сообщения](/en/messages/ru_ru/module/command/unmute/)

### `name`
- По умолчанию `flectonepulse.module.command.unmute`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unmute.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unmute.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

