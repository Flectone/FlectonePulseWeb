# Комманда /flectonepulse
Путь `permissions.yml > module.command.flectonepulse`

## Пояснение
Категория, отвечающая за настройку прав `/flectonepulse`

## Редактирование
```yaml
<permissions.module.command.flectonepulse>
```

### По умолчанию
```yaml
flectonepulse:
  name: "flectonepulse.module.command.flectonepulse"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.flectonepulse.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.flectonepulse.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/flectonepulse/)
- [Сообщения](/ru/messages/ru_ru/module/command/flectonepulse/)

### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.flectonepulse.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

