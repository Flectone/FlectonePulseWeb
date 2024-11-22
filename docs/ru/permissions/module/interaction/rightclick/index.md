# Правое нажатие
Путь `permissions.yml > module.interaction.rightclick`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Правое нажатие

## Редактирование
```yaml
<permissions.module.interaction.rightclick>
```

### По умолчанию
```yaml
rightclick:
  name: "flectonepulse.module.interaction.rightclick"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.rightclick.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.interaction.rightclick.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/interaction/rightclick/)
- [Сообщения](/ru/messages/ru_ru/module/interaction/rightclick/)

### `name`
- По умолчанию `flectonepulse.module.interaction.rightclick`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.rightclick.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.rightclick.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

