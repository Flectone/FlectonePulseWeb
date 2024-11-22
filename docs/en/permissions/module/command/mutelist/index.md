# Комманда /mutelist
Путь `permissions.yml > module.command.mutelist`

## Пояснение
Категория, отвечающая за настройку прав `/mutelist`

## Редактирование
```yaml
<permissions.module.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  name: "flectonepulse.module.command.mutelist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.mutelist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mutelist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/mutelist/)
- [Сообщения](/en/messages/ru_ru/module/command/mutelist/)

### `name`
- По умолчанию `flectonepulse.module.command.mutelist`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mutelist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mutelist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

