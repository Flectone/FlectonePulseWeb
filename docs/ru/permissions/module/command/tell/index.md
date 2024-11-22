# Комманда /tell
Путь `permissions.yml > module.command.tell`

## Пояснение
Категория, отвечающая за настройку прав `/tell`

## Редактирование
```yaml
<permissions.module.command.tell>
```

### По умолчанию
```yaml
tell:
  name: "flectonepulse.module.command.tell"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.tell.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.tell.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/tell/)
- [Сообщения](/ru/messages/ru_ru/module/command/tell/)

### `name`
- По умолчанию `flectonepulse.module.command.tell`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.tell.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.tell.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

