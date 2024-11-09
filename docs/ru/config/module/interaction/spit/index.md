# Плевок
Путь `config.yml > module.interaction.spit`

## Пояснение
Чтобы плюнуть, нужно держать в руке **белый краситель** и нажать **ПКМ**
![spit](/spit.gif)

Если плевок попал в игрока, ему напишется об этом
![spit message](/spit.png)

## Редактирование
```yaml
<config.module.interaction.spit>
```

### По умолчанию
```yaml
spit:
  enable: false
  message: true
  item: "WHITE_DYE"
  permission:
    name: "flectonepulse.module.interaction.spit"
    type: TRUE
  cooldown:
    enable: true
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.spit.cooldown.ignore"
      type: OP
  sound:
    enable: true
    type: "ENTITY_LLAMA_SPIT:0.3:1"
    permission:
      name: "flectonepulse.module.interaction.spit.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
    ProjectileHitEvent: LOWEST
```

## Параметры

- Сообщение попадания плевка изменяется тут [Плевок](/ru/messages/ru_ru/module/interaction/spit/)

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

### `permission`
- Название `flectonepulse.module.interaction.spit`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля


### `cooldown`
- По умолчанию `true`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.interaction.spit.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `ENTITY_LLAMA_SPIT:0.3:1`

Определяет тип (`ENTITY_LLAMA_SPIT`), громкость (`0.3`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.interaction.spit.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerInteractEvent: NORMAL
ProjectileHitEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->