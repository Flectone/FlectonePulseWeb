# Отключение
Путь `permission.yml > message.quit`

## Пояснение
Категория, отвечающая за настройку прав у сообщений отключений сервера

## Редактирование
```yaml
<permission.message.quit>
```

### По умолчанию
```yaml
quit:
  name: "flectonepulse.module.message.quit"
  type: TRUE
  sound:
    name: "flectonepulse.module.message.quit.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/ru/message/quit/)
- [Локализация](/ru/localizations/ru_ru/message/quit/)

### `name`
- По умолчанию `flectonepulse.module.message.quit`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.quit.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

