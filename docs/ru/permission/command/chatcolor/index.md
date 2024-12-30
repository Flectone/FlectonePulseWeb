# Комманда /chatcolor
Путь `permission.yml > command.chatcolor`

## Пояснение
Категория, отвечающая за настройку прав `/chatcolor`

## Редактирование
```yaml
<permission.command.chatcolor>
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

- [Конфиг](/ru/command/chatcolor/)
- [Локализация](/ru/localizations/ru_ru/command/chatcolor/)

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

<!--@include: @/ru/parts/permission.md-->

