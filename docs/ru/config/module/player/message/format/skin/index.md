# Скин
Путь `config.yml > module.player.message.format.skin`

## Пояснение
Это форматирование заменяет в любом сообщении `%skin%` на скин отправителя
![skin](/skin.png)

## Редактирование
```yaml
<config.module.player.message.format.skin>
```

### По умолчанию
```yaml
skin:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.skin"
    type: TRUE
  trigger: "%skin%"
```

## Параметры

- Формат сообщения изменяется тут [Скин](/ru/messages/ru_ru/module/player/message/skin/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.skin`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%skin%`

Сообщение, которое будет заменяться