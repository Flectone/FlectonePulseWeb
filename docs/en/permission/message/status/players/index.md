# Игроки
Путь `permission.yml > message.status.players`

## Пояснение
Категория, отвечающая за настройку прав у просмотра игроков

## Редактирование
```yaml
<permission.message.status.players>
```

### По умолчанию
```yaml
players:
  name: "flectonepulse.module.message.status.players"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.status.players.bypass"
    type: OP
```

## Параметры

- [Сообщения](/ru/message/status/players/)
- [Локализация](/ru/localizations/ru_ru/message/status/players/)

### `name`
- По умолчанию `flectonepulse.module.message.status.players`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `bypass`

Право для подключения на полный сервер

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.status.players.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

