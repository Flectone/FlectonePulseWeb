# Модули
Путь `config.yml > module.*`

## Пояснение
Эта категория является основной настройкой того, что происходит в игре, и вот что нужно знать:
- Каждый модуль имеет родителя (тот, кто выше находится)

::: tip Например есть
```yaml
house:
  door:
  chair:
```

`house` является родителем для `door` и `chair`
:::

- Каждый модуль зависит от `enable` родителя

::: tip Например есть
```yaml
house:
  enable: false // [!code highlight]
  door:
    enable: true
  chair:
    enable: true
```

`house` выключен, значит внезависимости от того, включены ли `door` и `chair` - они тоже будут выключены
:::

## Редактирование
```yaml
<config.module>
```

### По умолчанию
```yaml
module:
  enable: true
```

## Параметры

- [Права](/ru/permissions/module/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников