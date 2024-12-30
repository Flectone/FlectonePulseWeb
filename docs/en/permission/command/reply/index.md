# Комманда /reply
Путь `permission.yml > command.reply`

## Пояснение
Категория, отвечающая за настройку прав `/reply`

## Редактирование
```yaml
<permission.command.reply>
```

### По умолчанию
```yaml
reply:
  name: "flectonepulse.module.command.reply"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.reply.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.reply.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/reply/)
- [Локализация](/ru/localizations/ru_ru/command/reply/)

### `name`
- По умолчанию `flectonepulse.module.command.reply`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.reply.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.reply.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

