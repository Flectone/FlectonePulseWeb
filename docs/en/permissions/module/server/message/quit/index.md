# Отключение
Путь `permissions.yml > module.server.message.quit`

## Пояснение
Категория, отвечающая за настройку прав у сообщений отключений сервера

## Редактирование
```yaml
<permissions.module.server.message.quit>
```

### По умолчанию
```yaml
quit:
  name: "flectonepulse.module.server.message.quit"
  type: TRUE
  sound:
    name: "flectonepulse.module.server.message.quit.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/en/config/module/server/messsage/quit/)
- [Сообщения](/en/messages/ru_ru/module/server/message/quit/)

### `name`
- По умолчанию `flectonepulse.module.server.message.quit`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.server.message.quit.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/en/parts/permission.md-->

