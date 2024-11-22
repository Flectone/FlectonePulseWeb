# Комманда /ignorelist
Путь `permissions.yml > module.command.ignorelist`

## Пояснение
Категория, отвечающая за настройку прав `/ignorelist`

## Редактирование
```yaml
<permissions.module.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  name: "flectonepulse.module.command.ignorelist"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ignorelist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ignorelist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/ignorelist/)
- [Сообщения](/ru/messages/ru_ru/module/command/ignorelist/)

### `name`
- По умолчанию `flectonepulse.module.command.ignorelist`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignorelist.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ignorelist.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

