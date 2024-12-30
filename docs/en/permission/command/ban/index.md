# Комманда /ban
Путь `permission.yml > command.ban`

## Пояснение
Категория, отвечающая за настройку прав `/ban`

## Редактирование
```yaml
<permission.command.ban>
```

### По умолчанию
```yaml
ban:
  name: "flectonepulse.module.command.ban"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.ban.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ban.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/ban/)
- [Локализация](/ru/localizations/ru_ru/command/ban/)

### `name`
- По умолчанию `flectonepulse.module.command.ban`

Название права

### `type`
- По умолчанию `OP`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ban.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.ban.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

