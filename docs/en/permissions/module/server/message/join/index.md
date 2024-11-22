# Подключение
Путь `permissions.yml > module.server.message.join`

## Пояснение
Категория, отвечающая за настройку прав у сообщений подключений сервера

## Редактирование
```yaml
<permissions.module.server.message.join>
```

### По умолчанию
```yaml
join:
  name: "flectonepulse.module.server.message.join"
  type: TRUE
  sound:
    name: "flectonepulse.module.server.message.join.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/server/messsage/join/)
- [Сообщения](/en/messages/ru_ru/module/server/message/join/)

### `name`
- По умолчанию `flectonepulse.module.server.message.join`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.message.join.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

