# Комманда /translateto
Путь `permissions.yml > module.command.translateto`

## Пояснение
Категория, отвечающая за настройку прав `/translateto`

## Редактирование
```yaml
<permissions.module.command.translateto>
```

### По умолчанию
```yaml
translateto:
  name: "flectonepulse.module.command.translateto"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.translateto.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.translateto.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/command/translateto/)
- [Сообщения](/ru/messages/ru_ru/module/command/translateto/)

### `name`
- По умолчанию `flectonepulse.module.command.translateto`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.translateto.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.translateto.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

