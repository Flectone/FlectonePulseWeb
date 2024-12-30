# Снятие подписи
Путь `permission.yml > message.contact.unsign`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Снятие подписи

## Редактирование
```yaml
<permission.message.contact.unsign>
```

### По умолчанию
```yaml
unsign:
  name: "flectonepulse.module.message.contact.unsign"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.unsign.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.unsign.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/contact/unsign/)

### `name`
- По умолчанию `flectonepulse.module.message.contact.unsign`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.unsign.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.unsign.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

