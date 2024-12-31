# Имя
Путь `message.yml > module.player.name-`

## Пояснение
Модуль, отвечающий за имя игрока
![name tab](/nametab.png)
![name display](/namedisplay.png)

## Редактирование
```yaml
<message.module.player.name->
```

### По умолчанию
```yaml
name-:
  enable: true
  visible: false
  color: "<white>"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/format/name/)
- [Права](/ru/permission/message/format/name/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `visible`
- По умолчанию `false`

Включает или выключает ник над игроком

### `color`
- По умолчанию `<white>`

Цвет команды игрока из [доступных](#доступные-цвета)

<!--@include: @/ru/parts/color.md-->