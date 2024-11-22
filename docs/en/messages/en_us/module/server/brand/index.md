# Бренд
Путь `messages > en_us.yml > module.server.brand`

## Пояснение
Сообщения бренда сервера
![brand](/brand.png)

## Редактирование
```yaml
<en_us.module.server.brand>
```

### По умолчанию
```yaml
brand:
  values:
    - "<aqua>Minecraft"
    - "<white>Minecraft"
```

## Параметры

- [Конфиг](/en/config/module/server/brand/)
- [Права](/en/permissions/module/server/brand/)

### `values`
- По умолчанию:
```yaml
- "<aqua>Minecraft"
- "<white>Minecraft"
```

Список сообщений для бренда

::: warning ВАЖНО
В сообщение можно вставлять только [обычные цвета](#доступные-цвета)
:::

<!--@include: @/en/parts/color.md-->

