# Имя в списке
Путь `message.yml > module.server.tab.playerlistname`

## Пояснение
Модуль, отвечающий за имя игрока в ТАБе
![player list name](/playerlistname.png)

## Редактирование
```yaml
<message.module.server.tab.playerlistname>
```

### По умолчанию
```yaml
playerlistname:
  enable: true
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/tab/playerlistname/)
- [Права](/ru/permission/message/tab/playerlistname/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `ticker`
- `enable: true`

Нужно ли обновлять имя в ТАБе раз в какой-то промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно обновлять имя