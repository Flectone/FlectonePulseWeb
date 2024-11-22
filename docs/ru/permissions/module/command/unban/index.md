# Комманда /unban
Путь `permissions.yml > module.command.unban`

## Пояснение
Категория, отвечающая за настройку прав `/unban`

## Редактирование
```yaml
<permissions.module.command.unban>
```

### По умолчанию
```yaml
unban:
  name: "flectonepulse.module.command.unban"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.unban.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.unban.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/unban/)
- [Сообщения](/ru/messages/ru_ru/module/command/unban/)

### `name`
- По умолчанию `flectonepulse.module.command.unban`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unban.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.unban.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

