# Комманда /warnlist
Путь `permissions.yml > module.command.warnlist`

## Пояснение
Категория, отвечающая за настройку прав `/warnlist`

## Редактирование
```yaml
<permissions.module.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  name: "flectonepulse.module.command.warnlist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.warnlist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.warnlist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/warnlist/)
- [Сообщения](/en/messages/ru_ru/module/command/warnlist/)

### `name`
- По умолчанию `flectonepulse.module.command.warnlist`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warnlist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.warnlist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

