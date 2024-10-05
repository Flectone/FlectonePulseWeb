# Имя
Путь `config.yml > module.player.name.hover`

## Пояснение
Модуль, отвечающий за сообщение при наведении на имя игрока
![hover](/hover.png)

## Редактирование
```yaml
<config.module.player.name.hover>
```

### По умолчанию
```yaml
hover:
  enable: true
  clickable: true
  permission:
    name: "flectonepulse.module.player.name.hover"
    type: TRUE
```

## Параметры

- Формат сообщения изменяется тут [При наведении](/ru/messages/ru_ru/module/player/message/name/hover/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `clickable`
- По умолчанию `true`

Если включено, то при нажатии на ник игрока вставиться комманда `/tell игрок`
![hover click](/hoverclick.png)

### `permission`
- Название `flectonepulse.module.player.name.hover`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля