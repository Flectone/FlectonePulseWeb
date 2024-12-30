# В табе
Путь `message.yml > objective.tabname`

## Пояснение
[ScoreBoard значение](https://ru.minecraft.wiki/w/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81%D1%87%D1%91%D1%82%D0%B0_%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D1%85_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9) игрока в ТАБе
![player list](/playerlist.png)

## Редактирование
```yaml
<message.objective.tabname>
```

### По умолчанию
```yaml
tabname:
  enable: false
  mode: PING
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Права](/ru/permission/message/objective/tabname/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `mode`
- По умолчанию `PING`

Режим цифрового отображения значения из [доступных](#режимы-значений)

::: tip Например режим `PING`
Значит будет возвращаться пинг игрока
![player list](/playerlist.png)
:::

### `ticker`
- `enable: true`

Если включено, то изменяет значение каждый промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно изменять значение

<!--@include: @/ru/parts/objective.md-->