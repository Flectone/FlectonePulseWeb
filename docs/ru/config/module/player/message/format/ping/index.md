# Пинг
Путь `config.yml > module.player.message.format.ping`

## Пояснение
Это форматирование заменяет в любом сообщении `%ping%` на пинг отправителя
![ping](/ping.png)

## Редактирование
```yaml
<config.module.player.message.format.ping>
```

### По умолчанию
```yaml
ping:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.ping"
    type: TRUE
  trigger: "%ping%"
```

## Параметры

- Формат сообщения изменяется тут [Пинг](/ru/messages/ru_ru/module/player/message/ping/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.ping`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%ping%`

Сообщение, которое будет заменяться