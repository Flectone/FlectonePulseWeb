# Бренд
Путь `message.yml > module.server.brand`

## Пояснение
Модуль, отвечающий за сообщение бренда в F3
![brand](/brand.png)

## Редактирование
```yaml
<message.module.server.brand>
```

### По умолчанию
```yaml
brand:
  enable: true
  random: true
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/brand/)
- [Права](/ru/permission/message/brand/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение бренда будет выбираться случайным образом, иначе по порядку

### `ticker`
- `enable: true`

Нужно ли отправлять бренд раз в какой-то промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно отправлять бренд