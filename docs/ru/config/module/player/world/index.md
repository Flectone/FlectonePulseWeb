# Измерение
Путь `config.yml > module.player.world`

## Пояснение
Модуль, отвечающий за тег `<world_prefix>` т.е. за цвет измерения
![world tab](/worldtab.png)
![world chat](/worldchat.png)

## Редактирование
```yaml
<config.module.player.world>
```

### По умолчанию
```yaml
world:
  enable: true
  mode: TYPE
  permission:
    name: "flectonepulse.module.player.world"
    type: TRUE
  permission-world-tag:
    name: "flectonepulse.module.player.world_tag"
    type: TRUE
  type:
    normal: "<color:#98FB98>"
    nether: "<color:#F08080>"
    the_end: "<color:#9370DB>"
    custom: "<color:#98FB98>"
  name:
    world: "<color:#98FB98>"
    world_nether: "<color:#F08080>"
    world_the_end: "<color:#9370DB>"
  listener:
    PlayerChangedWorldEvent: HIGHEST
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `mode`
- По умолчанию `TYPE`

Режим определения мира из [доступных](#режимы-определения)

### `type`
- По умолчанию:
```yaml
type:
  normal: "<color:#98FB98>"
  nether: "<color:#F08080>"
  the_end: "<color:#9370DB>"
  custom: "<color:#98FB98>"
```

Список миров и их `<world_prefix>`, если `mode: TYPE`

### `name`
```yaml
name:
  world: "<color:#98FB98>"
  world_nether: "<color:#F08080>"
  world_the_end: "<color:#9370DB>"
```

Список миров и их `<world_prefix>`, если `mode: NAME`

### `permission`
- Название `flectonepulse.module.player`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
PlayerChangedWorldEvent: HIGHEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

## Режимы определения
| Режим    | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| `TYPE`   | Мир определяется по названию его типа, например обычный мир это `normal` |
| `NAME`   | Мир определяется по названию его папки                                   |

<!--@include: @/ru/parts/listener.md-->