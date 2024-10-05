# Иконка
Путь `config.yml > module.server.icon`

## Пояснение
Модуль отвечающий за изображение сервера
![server icon](/servericon.png)

## Редактирование
```yaml
<config.module.server.icon>
```

### По умолчанию
```yaml
icon:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.icon"
    type: TRUE
  list:
    - "server-icon-1.png"
    - "server-icon-2.png"
  listener:
    ServerListPingEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то изображение будет выбираться случайным образом, иначе по порядку

### `permission`
- Название `flectonepulse.module.server`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `list`

`server-icon-1.png` ![server icon 1](/server-icon-1.png) 


`server-icon-2.png` ![server icon 2](/server-icon-2.png)

Список названий изображений, которые должны отображаться

::: danger Изображение должно:
1. Находиться внутри папки `/FlectonePulse/icons/`
2. Иметь размер **ТОЛЬКО** `64x64`
:::

### `listener`
- По умолчанию:
```yaml
ServerListPingEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->