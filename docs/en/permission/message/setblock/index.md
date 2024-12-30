# Сетблок
Путь `permission.yml > message.setblock`

## Пояснение
Категория, отвечающая за настройку прав у сообщений `/setblock` сервера

## Редактирование
```yaml
<permission.message.setblock>
```

### По умолчанию
```yaml
setblock:
  name: "flectonepulse.module.message.setblock"
  type: TRUE
  sound:
    name: "flectonepulse.module.message.setblock.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/setblock/)
- [Локализация](/ru/localizations/ru_ru/message/setblock/)

### `name`
- По умолчанию `flectonepulse.module.message.setblock`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.setblock.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

