# PlacehodelAPI
Путь `permission.yml > integration.placeholderapi`

## Пояснение
Категория, отвечающая за настройку прав у интеграции PlaceholderAPI

## Редактирование
```yaml
<permission.integration.placeholderapi>
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

- [Интеграция](/ru/integration/placeholderapi/)

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

