# Имя
Путь `config.yml > module.player.name.*`

## Пояснение
Модуль, отвечающий за имя игрока
![name tab](/nametab.png)
![name display](/namedisplay.png)

## Редактирование
```yaml
<config.module.player.name>
```

### По умолчанию
```yaml
name:
  enable: true
  permission:
    name: "flectonepulse.module.player.name"
    type: TRUE
```

## Параметры

- Сообщения изменяются здесь [Имя](/ru/messages/ru_ru/module/player/name/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `permission`
- Название `flectonepulse.module.player.name`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля