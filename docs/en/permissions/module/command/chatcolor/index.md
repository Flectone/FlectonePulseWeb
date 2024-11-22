# Комманда /chatcolor
Путь `permissions.yml > module.command.chatcolor`

## Пояснение
Категория, отвечающая за настройку прав `/chatcolor`

## Редактирование
```yaml
<permissions.module.command.chatcolor>
```

### По умолчанию
```yaml
chatcolor:
  name: "flectonepulse.module.command.chatcolor"
  type: TRUE
  other:
    name: "flectonepulse.module.command.chatcolor.other"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.chatcolor.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.chatcolor.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/chatcolor/)
- [Сообщения](/en/messages/ru_ru/module/command/chatcolor/)

### `name`
- По умолчанию `flectonepulse.module.command.chatcolor`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `other`

Право для изменения цвета другому игроку

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.chatcolor.other`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.chatcolor.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.chatcolor.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

