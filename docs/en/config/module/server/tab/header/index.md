# Верхнее
Путь `config.yml > module.server.tab.header`

## Пояснение
Модуль, отвечающий за текст в верхней части ТАБа
![header](/header.png)

## Редактирование
```yaml
<config.module.server.tab.header>
```

### По умолчанию
```yaml
header:
  enable: true
  random: true
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/tab/header/)
- [Права](/en/permissions/module/server/tab/header/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение будет выбираться случайным образом, иначе по порядку

### `ticker`
- `enable: true`

Нужно ли обновлять сообщение раз в какой-то промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно обновлять сообщение