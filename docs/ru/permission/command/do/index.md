# Комманда /do
Путь `permission.yml > command.do`

## Пояснение
Категория, отвечающая за настройку прав `/do`

## Редактирование
```yaml
<permission.command.do>
```

### По умолчанию
```yaml
do:
  name: "flectonepulse.module.command.do"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.do.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.do.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/do/)
- [Локализация](/ru/localizations/ru_ru/command/do/)

### `name`
- По умолчанию `flectonepulse.module.command.do`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.do.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.do.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

