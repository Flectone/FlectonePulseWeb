# Комманда /try
Путь `permissions.yml > module.command.try`

## Пояснение
Категория, отвечающая за настройку прав `/try`

## Редактирование
```yaml
<permissions.module.command.try>
```

### По умолчанию
```yaml
try:
  name: "flectonepulse.module.command.try"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.try.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.try.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/try/)
- [Сообщения](/ru/messages/ru_ru/module/command/try/)

### `name`
- По умолчанию `flectonepulse.module.command.try`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.try.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.try.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

