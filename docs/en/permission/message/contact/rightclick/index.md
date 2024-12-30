# Правое нажатие
Путь `permission.yml > message.contact.rightclick`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Правое нажатие

## Редактирование
```yaml
<permission.message.contact.rightclick>
```

### По умолчанию
```yaml
rightclick:
  name: "flectonepulse.module.message.contact.rightclick"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.rightclick.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.rightclick.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/contact/rightclick/)
- [Локализация](/ru/localizations/ru_ru/message/contact/rightclick/)

### `name`
- По умолчанию `flectonepulse.module.message.contact.rightclick`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.rightclick.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.rightclick.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

