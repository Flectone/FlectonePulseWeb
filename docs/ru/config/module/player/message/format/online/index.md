# Онлайн
Путь `config.yml > module.player.message.format.online`

## Пояснение
Это форматирование заменяет в любом сообщении `%online%` на количество игроков сервера
![online](/online.png)

## Редактирование
```yaml
<config.module.player.message.format.online>
```

### По умолчанию
```yaml
online:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.online"
    type: TRUE
  trigger: "%online%"
```

## Параметры

- Формат сообщения изменяется тут [Онлайн](/ru/messages/ru_ru/module/player/message/online/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.online`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%online%`

Сообщение, которое будет заменяться