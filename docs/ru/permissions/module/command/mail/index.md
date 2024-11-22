# Комманда /mail
Путь `permissions.yml > module.command.mail`

## Пояснение
Категория, отвечающая за настройку прав `/mail`

## Редактирование
```yaml
<permissions.module.command.mail>
```

### По умолчанию
```yaml
mail:
  name: "flectonepulse.module.command.mail"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.mail.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mail.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/mail/)
- [Сообщения](/ru/messages/ru_ru/module/command/mail/)

### `name`
- По умолчанию `flectonepulse.module.command.mail`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mail.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.mail.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

