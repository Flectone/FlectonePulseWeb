# ТПС
Путь `config.yml > module.player.message.format.tps`

## Пояснение
Это форматирование заменяет в любом сообщении `%tps%` на значение ТПС сервера
![tps](/tps.png)

## Редактирование
```yaml
<config.module.player.message.format.tps>
```

### По умолчанию
```yaml
tps:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.tps"
    type: TRUE
  trigger: "%tps%"
```

## Параметры

- Формат сообщения изменяется тут [ТПС](/ru/messages/ru_ru/module/player/message/tps/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.tps`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%tps%`

Сообщение, которое будет заменяться