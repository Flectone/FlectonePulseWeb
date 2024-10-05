# Теги
Путь `config.yml > module.tag.*`

## Пояснение
Теги это то, что можно использовать в любом месте плагина, как плейсхолдеры

::: tip Например есть тег
```yaml
house:
  enable: true
```
Значит я могу в [сообщениях](/ru/messages/) использовать `<house>`
:::

## Редактирование
```yaml
<config.module.tag>
```

### По умолчанию
```yaml
tag:
  enable: true
  permission:
    name: "flectonepulse.module.tag"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `permission`
- Название `flectonepulse.module.tag`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля