# Метка
Путь `permissions.yml > module.interaction.mark`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Метка

## Редактирование
```yaml
<permissions.module.interaction.mark>
```

### По умолчанию
```yaml
mark:
  name: "flectonepulse.module.interaction.mark"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.mark.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.interaction.mark.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/interaction/mark/)

### `name`
- По умолчанию `flectonepulse.module.interaction.mark`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.mark.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.mark.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

