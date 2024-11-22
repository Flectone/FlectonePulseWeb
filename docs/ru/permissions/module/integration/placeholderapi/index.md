# PlacehodelAPI
Путь `permissions.yml > module.integration.placeholderapi`

## Пояснение
Категория, отвечающая за настройку прав у интеграции PlaceholderAPI

## Редактирование
```yaml
<permissions.module.integration.placeholderapi>
```

### По умолчанию
```yaml
placeholderapi:
  name: "flectonepulse.module.integration.placeholderapi"
  type: TRUE
  use:
    name: "flectonepulse.module.integration.placeholderapi.use"
    type: OP
```

## Параметры

- [Конфиг](/ru/config/module/integration/placeholderapi/)

### `name`
- По умолчанию `flectonepulse.module.integration.placeholderapi`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `use`

Право для использования плейсхолдеров из PlaceholderAPI

::: details Настройка
### `name`
- По умолчанию `flectonepulse.module.integration.placeholderapi.use`

Название права

### `type`
- По умолчанию `OP`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

