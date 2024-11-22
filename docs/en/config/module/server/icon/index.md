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
  enable: false
  random: true
  values:
    - "server-icon-1.png"
    - "server-icon-2.png"
```

## Параметры

- [Права](/en/permissions/module/server/icon/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то изображение будет выбираться случайным образом, иначе по порядку

### `values`

`server-icon-1.png` ![server icon 1](/server-icon-1.png) 


`server-icon-2.png` ![server icon 2](/server-icon-2.png)

Список названий изображений, которые должны отображаться

::: danger Изображение должно:
1. Находиться внутри папки `/FlectonePulse/icons/`
2. Иметь размер **ТОЛЬКО** `64x64`
:::