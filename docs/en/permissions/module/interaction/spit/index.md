# Плевок
Путь `permissions.yml > module.interaction.spit`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Плевок

## Редактирование
```yaml
<permissions.module.interaction.spit>
```

### По умолчанию
```yaml
spit:
  name: "flectonepulse.module.interaction.spit"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.spit.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.interaction.spit.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/interaction/spit/)
- [Сообщения](/en/messages/ru_ru/module/interaction/spit/)

### `name`
- По умолчанию `flectonepulse.module.interaction.spit`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.spit.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.spit.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

