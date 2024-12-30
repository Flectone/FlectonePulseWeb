# Плевок
Путь `message.yml > contact.spit`

## Пояснение
Чтобы плюнуть, нужно держать в руке **белый краситель** и нажать **ПКМ**
![spit](/spit.gif)

Если плевок попал в игрока, ему напишется об этом
![spit message](/spit.png)

## Редактирование
```yaml
<message.contact.spit>
```

### По умолчанию
```yaml
spit:
  enable: false
  message: true
  item: "WHITE_DYE"
  cooldown:
    enable: true
    duration: 60
  sound:
    enable: true
    type: "ENTITY_LLAMA_SPIT:0.3:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/contact/spit/)
- [Права](/ru/permission/message/contact/spit/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `message`
- По умолчанию `true`

Включает сообщение попадания плевка в игрока
![spit message](/spit.png)

### `item`
- По умолчанию `WHITE_DYE`

Предмет, который используется для создания плевка


### `cooldown`
- По умолчанию `true`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `ENTITY_LLAMA_SPIT:0.3:1`

Определяет тип (`ENTITY_LLAMA_SPIT`), громкость (`0.3`) и тональность (`1`) звука через `:`
:::