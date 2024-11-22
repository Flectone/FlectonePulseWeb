# Комманда /me
Путь `permissions.yml > module.command.me`

## Пояснение
Категория, отвечающая за настройку прав `/me`

## Редактирование
```yaml
<permissions.module.command.me>
```

### По умолчанию
```yaml
me:
  name: "flectonepulse.module.command.me"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.me.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.me.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/me/)
- [Сообщения](/en/messages/ru_ru/module/command/me/)

### `name`
- По умолчанию `flectonepulse.module.command.me`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.me.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.me.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

