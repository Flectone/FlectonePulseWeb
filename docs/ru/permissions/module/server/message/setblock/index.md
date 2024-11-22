# Сетблок
Путь `permissions.yml > module.server.message.setblock`

## Пояснение
Категория, отвечающая за настройку прав у сообщений `/setblock` сервера

## Редактирование
```yaml
<permissions.module.server.message.setblock>
```

### По умолчанию
```yaml
setblock:
  name: "flectonepulse.module.server.message.setblock"
  type: TRUE
  sound:
    name: "flectonepulse.module.server.message.setblock.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/server/messsage/setblock/)
- [Сообщения](/ru/messages/ru_ru/module/server/message/setblock/)

### `name`
- По умолчанию `flectonepulse.module.server.message.setblock`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.message.setblock.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

