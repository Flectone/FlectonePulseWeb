# Снятие подписи
Путь `permissions.yml > module.interaction.unsign`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Снятие подписи

## Редактирование
```yaml
<permissions.module.interaction.unsign>
```

### По умолчанию
```yaml
unsign:
  name: "flectonepulse.module.interaction.unsign"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.unsign.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.interaction.unsign.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/interaction/unsign/)

### `name`
- По умолчанию `flectonepulse.module.interaction.unsign`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.unsign.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.unsign.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

