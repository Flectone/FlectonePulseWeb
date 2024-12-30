# Метка
Путь `permission.yml > message.contact.mark`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Метка

## Редактирование
```yaml
<permission.message.contact.mark>
```

### По умолчанию
```yaml
mark:
  name: "flectonepulse.module.message.contact.mark"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.mark.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.mark.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/contact/mark/)

### `name`
- По умолчанию `flectonepulse.module.message.contact.mark`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.mark.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.contact.mark.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

