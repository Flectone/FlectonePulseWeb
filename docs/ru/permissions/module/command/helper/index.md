# Комманда /helper
Путь `permissions.yml > module.command.helper`

## Пояснение
Категория, отвечающая за настройку прав `/helper`

## Редактирование
```yaml
<permissions.module.command.helper>
```

### По умолчанию
```yaml
helper:
  name: "flectonepulse.module.command.helper"
  type: TRUE
  see:
    name: "flectonepulse.module.command.helper.see"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.helper.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.helper.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/helper/)
- [Сообщения](/ru/messages/ru_ru/module/command/helper/)

### `name`
- По умолчанию `flectonepulse.module.command.helper`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `see`

Право для просмотра запросов о помощи

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.helper.see`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.helper.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.helper.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

