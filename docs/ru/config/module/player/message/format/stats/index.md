# Статистика
Путь `config.yml > module.player.message.format.stats`

## Пояснение
Это форматирование заменяет в любом сообщении `%stats%` на статистику отправителя
![stats](/stats.png)

## Редактирование
```yaml
<config.module.player.message.format.stats>
```

### По умолчанию
```yaml
stats:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.stats"
    type: TRUE
  trigger: "%stats%"
```

## Параметры

- Формат сообщения изменяется тут [Статистика](/ru/messages/ru_ru/module/player/message/stats/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.stats`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%stats%`

Сообщение, которое будет заменяться