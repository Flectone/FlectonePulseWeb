# Команда
Путь `config.yml > module.player.team`

## Пояснение
Модуль, отвечающий за [ScoreBoard команду](https://ru.minecraft.wiki/w/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B_%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8/team) игрока

## Редактирование
```yaml
<config.module.player.team>
```

### По умолчанию
```yaml
team:
  enable: true
  name-visible: false
  color: "<white>"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/player/team/)
- [Права](/en/permissions/module/player/team/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `name-visible`
- По умолчанию `false`

Включает или выключает ник над игроком

### `color`
- По умолчанию `<white>`

Цвет команды игрока из [доступных](#доступные-цвета)

<!--@include: @/en/parts/color.md-->