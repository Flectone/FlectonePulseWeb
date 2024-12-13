# Игроки
Путь `permissions.yml > module.server.status.players`

## Пояснение
Категория, отвечающая за настройку прав у просмотра игроков

## Редактирование
```yaml
<permissions.module.server.status.players>
```

### По умолчанию
```yaml
players:
  name: "flectonepulse.module.server.status.players"
  type: TRUE
  bypass:
    name: "flectonepulse.module.server.status.players.bypass"
    type: OP
```

## Параметры

- [Конфиг](/en/config/module/server/status/players/)
- [Сообщения](/en/messages/ru_ru/module/server/status/players/)

### `name`
- По умолчанию `flectonepulse.module.server.status.players`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для подключения на полный сервер

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.status.players.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

