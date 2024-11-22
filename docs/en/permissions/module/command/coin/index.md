# Комманда /coin
Путь `permissions.yml > module.command.coin`

## Пояснение
Категория, отвечающая за настройку прав `/coin`

## Редактирование
```yaml
<permissions.module.command.coin>
```

### По умолчанию
```yaml
coin:
  name: "flectonepulse.module.command.coin"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.coin.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.coin.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/command/coin/)
- [Сообщения](/en/messages/ru_ru/module/command/coin/)

### `name`
- По умолчанию `flectonepulse.module.command.coin`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.coin.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.coin.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

