# Измерение
Путь `message.yml > format.world`

## Пояснение
Модуль, отвечающий за тег `<world_prefix>` т.е. за цвет измерения
![world tab](/worldtab.png)
![world chat](/worldchat.png)

## Редактирование
```yaml
<message.format.world>
```

### По умолчанию
```yaml
world:
  enable: true
  mode: TYPE
  values:
    normal: "<color:#98FB98>"
    nether: "<color:#F08080>"
    the_end: "<color:#9370DB>"
    custom: "<color:#98FB98>"
    world: "<color:#98FB98>"
    world_nether: "<color:#F08080>"
    world_the_end: "<color:#9370DB>"
```

## Параметры

- [Права](/ru/permission/message/format/world/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `mode`
- По умолчанию `TYPE`

Режим определения мира из [доступных](#режимы-определения)

### `values`
- По умолчанию:
```yaml
normal: "<color:#98FB98>"
nether: "<color:#F08080>"
the_end: "<color:#9370DB>"
custom: "<color:#98FB98>"
world: "<color:#98FB98>"
world_nether: "<color:#F08080>"
world_the_end: "<color:#9370DB>"
```

Список миров и их `<world_prefix>`

## Режимы определения
| Режим    | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| `TYPE`   | Мир определяется по названию его типа, например обычный мир это `normal` |
| `NAME`   | Мир определяется по названию его папки                                   |