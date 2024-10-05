# Смерть
Путь `config.yml > module.server.message.death`

## Пояснение
Сообщение от сервера, когда игрок умирает
![death server](/deathserver.png)
![death player](/deathplayer.png)

## Редактирование
```yaml
<config.module.server.message.death>
```

### По умолчанию
```yaml
death:
  enable: true
  visible: true
  mob-default: true
  entity-hover: true
  permission:
    name: "flectonepulse.module.server.message.death"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.death.sound"
      type: TRUE
  listener:
    PlayerInteractEvent: LOWEST
    EntityDamageEvent: LOWEST
    PlayerDeathEvent: LOWEST
```

## Параметры

- Сообщения изменяются тут [Смерть](/ru/messages/ru_ru/module/server/message/death/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `visible`
- По умолчанию `true`

Включает отображение сообщения о смерти от плагина

### `mob-default`
- По умолчанию `true`

Если включено, то для каждой смерти от любого моба используется одно [сообщение default]((/ru/messages/ru_ru/module/server/message/death/))
![death mob](/deathmob.png)

Если выключено, то для каждой смерти от моба нужно написать своё [сообщение]((/ru/messages/ru_ru/module/server/message/death/))

### `entity-hover`
- По умолчанию `true`

Включает отображение информации о мобе при наведении на его имя
![death hover](/deathhover.png)

### `permission`
- Название `flectonepulse.module.server.message.death`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

### `permission`
- Название `"flectonepulse.module.server.message.death.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerInteractEvent: LOWEST
EntityDamageEvent: LOWEST
PlayerDeathEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->
