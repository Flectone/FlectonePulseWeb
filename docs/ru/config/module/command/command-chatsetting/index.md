# Комманда /chatsetting
Путь `config.yml > module.command.command-chatsetting`

## Пояснение
Комманда для настройки чата
![command chatsetting](/commandchatsetting.png)


## Редактирование
```yaml
<config.module.command.command-chatsetting>
```

### По умолчанию
```yaml
    command-chatsetting:
      enable: true
      aliases:
        - "chatsetting"
      settings:
        TELL:
          slot: 16
          permission:
            name: "flectonepulse.module.command.chatsetting.tell"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DO:
          slot: 23
          permission:
            name: "flectonepulse.module.command.chatsetting.do"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        AFK:
          slot: 25
          permission:
            name: "flectonepulse.module.command.chatsetting.afk"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ADVANCEMENT:
          slot: 4
          permission:
            name: "flectonepulse.module.command.chatsetting.advancement"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        WARN:
          slot: 15
          permission:
            name: "flectonepulse.module.command.chatsetting.warn"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        JOIN:
          slot: 6
          permission:
            name: "flectonepulse.module.command.chatsetting.join"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ROCKPAPERSCISSORS:
          slot: 29
          permission:
            name: "flectonepulse.module.command.chatsetting.rockpaperscissors"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        GREETING:
          slot: 28
          permission:
            name: "flectonepulse.module.command.chatsetting.greeting"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DICE:
          slot: 11
          permission:
            name: "flectonepulse.module.command.chatsetting.dice"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BAN:
          slot: 14
          permission:
            name: "flectonepulse.module.command.chatsetting.ban"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        KICK:
          slot: 20
          permission:
            name: "flectonepulse.module.command.chatsetting.kick"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        QUIT:
          slot: 7
          permission:
            name: "flectonepulse.module.command.chatsetting.quit"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        CHAT:
          slot: 0
          permission:
            name: "flectonepulse.module.command.chatsetting.chat"
            type: TRUE
          materials:
            - YELLOW_CONCRETE
        TICTACTOE:
          slot: 19
          permission:
            name: "flectonepulse.module.command.chatsetting.tictactoe"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        COLOR:
          slot: 1
          permission:
            name: "flectonepulse.module.command.chatsetting.color"
            type: TRUE
          materials:
            - YELLOW_CONCRETE
        MUTE:
          slot: 13
          permission:
            name: "flectonepulse.module.command.chatsetting.mute"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        REPLY:
          slot: 17
          permission:
            name: "flectonepulse.module.command.chatsetting.reply"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        COIN:
          slot: 24
          permission:
            name: "flectonepulse.module.command.chatsetting.coin"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DEATH:
          slot: 5
          permission:
            name: "flectonepulse.module.command.chatsetting.death"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        TRANSLATETO:
          slot: 21
          permission:
            name: "flectonepulse.module.command.chatsetting.translateto"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BALL:
          slot: 12
          permission:
            name: "flectonepulse.module.command.chatsetting.ball"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        STREAM:
          slot: 2
          permission:
            name: "flectonepulse.module.command.chatsetting.stream"
            type: OP
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        SPIT:
          slot: 27
          permission:
            name: "flectonepulse.module.command.chatsetting.spit"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        MAIL:
          slot: 18
          permission:
            name: "flectonepulse.module.command.chatsetting.mail"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        SPY:
          slot: 3
          permission:
            name: "flectonepulse.module.command.chatsetting.spy"
            type: OP
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        POLL:
          slot: 26
          permission:
            name: "flectonepulse.module.command.chatsetting.poll"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ME:
          slot: 9
          permission:
            name: "flectonepulse.module.command.chatsetting.me"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        TRY:
          slot: 10
          permission:
            name: "flectonepulse.module.command.chatsetting.try"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        AUTOMESSAGE:
          slot: 8
          permission:
            name: "flectonepulse.module.command.chatsetting.automessage"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BROADCAST:
          slot: 22
          permission:
            name: "flectonepulse.module.command.chatsetting.broadcast"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
      permission:
        name: "flectonepulse.module.command.chatsetting"
        type: TRUE
      permission-other:
        name: "flectonepulse.module.command.chatsetting.other"
        type: OP
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.command.chatsetting.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.command.chatsetting.sound"
          type: TRUE
```

## Параметры

- Сообщения изменяются тут [Chatsetting](/ru/messages/ru_ru/module/command/command-chatsetting/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `chatsetting`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newchatsetting`, `настройкачата` и т.д.
:::

### `settings`

Список настроек, которые могут быть изменены

::: tip Пример настройки на `TELL`
#### `slot`
- По умолчанию `16`

Слот инвентаря, в котором будет настройка

#### `permission`
- Название `flectonepulse.module.command.chatsetting.tell`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для смены настройки `tell`

#### `materials`
- По умолчанию:
```yaml
- LIME_CONCRETE
- RED_CONCRETE
```

Список материалов, которые будут использованы для отображения состояния настройки

`LIME_CONCRETE` первый материал, отображается когда настройка включена <br>
`RED_CONCRETE` второй материал, отображается когда настройка выключена

:::

### `permission`
- Название `flectonepulse.module.command.chatsetting`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для смены настроек себе

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.chatsetting.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.command.chatsetting.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::