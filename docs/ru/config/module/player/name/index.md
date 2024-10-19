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
  display: "<prefix><fcolor:2><player></fcolor><suffix>"
  permission:
    name: "flectonepulse.module.player.name"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `permission`
- Название `flectonepulse.module.player.name`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля