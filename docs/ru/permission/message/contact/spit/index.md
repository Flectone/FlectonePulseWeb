# Плевок
Путь `permission.yml > message.contact.spit`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Плевок

## Редактирование
```yaml
<permission.message.contact.spit>
```

### По умолчанию
```yaml
spit:
  name: "flectonepulse.module.message.contact.spit"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.spit.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.spit.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/contact/spit/)
- [Локализация](/ru/localizations/ru_ru/message/contact/spit/)

### `name`
- По умолчанию `flectonepulse.module.message.contact.spit`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.spit.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.spit.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

