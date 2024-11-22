# Режим игры
Путь `permissions.yml > module.server.message.gamemode`

## Пояснение
Категория, отвечающая за настройку прав у сообщений режима игры сервера

## Редактирование
```yaml
<permissions.module.server.message.gamemode>
```

### По умолчанию
```yaml
gamemode:
  name: "flectonepulse.module.server.message.gamemode"
  type: TRUE
  sound:
    name: "flectonepulse.module.server.message.gamemode.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/server/messsage/gamemode/)
- [Сообщения](/ru/messages/ru_ru/module/server/message/gamemode/)

### `name`
- По умолчанию `flectonepulse.module.server.message.gamemode`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.message.gamemode.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

