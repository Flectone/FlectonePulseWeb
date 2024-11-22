# Количество игроков
Путь `permissions.yml > module.server.playercount`

## Пояснение
Категория, отвечающая за настройку прав у МОТД сервера

## Редактирование
```yaml
<permissions.module.server.playercount>
```

### По умолчанию
```yaml
playercount:
  name: "flectonepulse.module.server.playercount"
  type: TRUE
  bypass:
    name: "flectonepulse.module.server.playercount.bypass"
    type: OP
```

## Параметры

- [Конфиг](/en/config/module/server/playercount/)
- [Сообщения](/en/messages/ru_ru/module/server/playercount/)

### `name`
- По умолчанию `flectonepulse.module.server.playercount`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для подключения на полный сервер

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.playercount.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

