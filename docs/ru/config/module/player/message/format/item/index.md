# Предмет
Путь `config.yml > module.player.message.format.item`

## Пояснение
Это форматирование заменяет в любом сообщении `%item%` на предмет, который держит отправитель в главной или второй руке
![item](/item.png)

## Редактирование
```yaml
<config.module.player.message.format.item>
```

### По умолчанию
```yaml
item:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.item"
    type: TRUE
  trigger: "%item%"
```

## Параметры

- Формат сообщения изменяется тут [Предмет](/ru/messages/ru_ru/module/player/message/item/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.item`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `%item%`

Сообщение, которое будет заменяться