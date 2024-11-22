# Подпись
Путь `permissions.yml > module.interaction.sign`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Подпись

## Редактирование
```yaml
<permissions.module.interaction.sign>
```

### По умолчанию
```yaml
sign:
  name: "flectonepulse.module.interaction.sign"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.sign.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.interaction.sign.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/interaction/sign/)
- [Сообщения](/ru/messages/ru_ru/module/interaction/sign/)

### `name`
- По умолчанию `flectonepulse.module.interaction.sign`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.sign.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.interaction.sign.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

