# Подпись
Путь `permission.yml > message.contact.sign`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Подпись

## Редактирование
```yaml
<permission.message.contact.sign>
```

### По умолчанию
```yaml
sign:
  name: "flectonepulse.module.message.contact.sign"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.sign.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.sign.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/contact/sign/)
- [Локализация](/ru/localizations/ru_ru/message/contact/sign/)

### `name`
- По умолчанию `flectonepulse.module.message.contact.sign`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.sign.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.sign.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

