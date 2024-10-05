# Отключение
Путь `messages > ru_ru.yml > module.server.brand`

## Пояснение
Сообщения бренда сервера
![brand](/brand.png)

## Редактирование
```yaml
<ru_ru.module.server.brand>
```

### По умолчанию
```yaml
brand:
  format:
    - "<white>FlectonePulse"
    - "<aqua>FlectonePulse"
```

## Параметры

- Конфигурация происходит тут [Бренд](/ru/config/module/server/brand/)

### `format`
- По умолчанию:
```yaml
- "<white>FlectonePulse"
- "<aqua>FlectonePulse"
```

Список сообщений для бренда

::: warning Важно понимать
В сообщение можно вставлять только [обычные цвета](#доступные-цвета)
:::

<!--@include: @/ru/parts/color.md-->

