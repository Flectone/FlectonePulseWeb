# Координаты
Путь `config.yml > module.player.message.format.coords`

## Пояснение
Это форматирование заменяет в любом сообщении `%coords%` на текущие координаты отправителя
![coords](/coords.png)

## Редактирование
```yaml
<config.module.player.message.format.coords>
```

### По умолчанию
```yaml
coords:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.coords"
    type: TRUE
  trigger: "%coords%"
```

## Параметры

- Формат сообщения изменяется тут [Координаты](/ru/messages/ru_ru/module/player/message/coords/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.coords`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%coords%`

Сообщение, которое будет заменяться