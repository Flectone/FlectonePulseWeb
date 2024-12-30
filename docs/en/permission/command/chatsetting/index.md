# Комманда /chatsetting
Путь `permission.yml > command.chatsetting`

## Пояснение
Категория, отвечающая за настройку прав `/chatsetting`

## Редактирование
```yaml
<permission.command.chatsetting>
```

### По умолчанию
```yaml
chatsetting:
  name: "flectonepulse.module.command.chatsetting"
  type: TRUE
  settings:
    CHAT:
      name: "flectonepulse.module.command.chatsetting.chat"
      type: TRUE
    COLOR:
      name: "flectonepulse.module.command.chatsetting.color"
      type: TRUE
    STREAM:
      name: "flectonepulse.module.command.chatsetting.stream"
      type: OP
    SPY:
      name: "flectonepulse.module.command.chatsetting.spy"
      type: OP
    ADVANCEMENT:
      name: "flectonepulse.module.command.chatsetting.advancement"
      type: TRUE
    DEATH:
      name: "flectonepulse.module.command.chatsetting.death"
      type: TRUE
    JOIN:
      name: "flectonepulse.module.command.chatsetting.join"
      type: TRUE
    QUIT:
      name: "flectonepulse.module.command.chatsetting.quit"
      type: TRUE
    AUTO:
      name: "flectonepulse.module.command.chatsetting.auto"
      type: TRUE
    ME:
      name: "flectonepulse.module.command.chatsetting.me"
      type: TRUE
    TRY:
      name: "flectonepulse.module.command.chatsetting.try"
      type: TRUE
    DICE:
      name: "flectonepulse.module.command.chatsetting.dice"
      type: TRUE
    BALL:
      name: "flectonepulse.module.command.chatsetting.ball"
      type: TRUE
    MUTE:
      name: "flectonepulse.module.command.chatsetting.mute"
      type: TRUE
    BAN:
      name: "flectonepulse.module.command.chatsetting.ban"
      type: TRUE
    WARN:
      name: "flectonepulse.module.command.chatsetting.warn"
      type: TRUE
    TELL:
      name: "flectonepulse.module.command.chatsetting.tell"
      type: TRUE
    REPLY:
      name: "flectonepulse.module.command.chatsetting.reply"
      type: TRUE
    MAIL:
      name: "flectonepulse.module.command.chatsetting.mail"
      type: TRUE
    TICTACTOE:
      name: "flectonepulse.module.command.chatsetting.tictactoe"
      type: TRUE
    KICK:
      name: "flectonepulse.module.command.chatsetting.kick"
      type: TRUE
    TRANSLATETO:
      name: "flectonepulse.module.command.chatsetting.translateto"
      type: TRUE
    BROADCAST:
      name: "flectonepulse.module.command.chatsetting.broadcast"
      type: TRUE
    DO:
      name: "flectonepulse.module.command.chatsetting.do"
      type: TRUE
    COIN:
      name: "flectonepulse.module.command.chatsetting.coin"
      type: TRUE
    AFK:
      name: "flectonepulse.module.command.chatsetting.afk"
      type: TRUE
    POLL:
      name: "flectonepulse.module.command.chatsetting.poll"
      type: TRUE
    SPIT:
      name: "flectonepulse.module.command.chatsetting.spit"
      type: TRUE
    GREETING:
      name: "flectonepulse.module.command.chatsetting.greeting"
      type: TRUE
    ROCKPAPERSCISSORS:
      name: "flectonepulse.module.command.chatsetting.rockpaperscissors"
      type: TRUE
    DISCORD:
      name: "flectonepulse.module.command.chatsetting.discord"
      type: TRUE
    TELEGRAM:
      name: "flectonepulse.module.command.chatsetting.telegram"
      type: TRUE
    TWITCH:
      name: "flectonepulse.module.command.chatsetting.twitch"
      type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.chatsetting.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.chatsetting.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/ru/command/chatsetting/)
- [Локализация](/ru/localizations/ru_ru/command/chatsetting/)

### `name`
- По умолчанию `flectonepulse.module.command.chatsetting`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `settings`

Список настроек и их прав

### `cooldown-bypass`

Право для игнорирования задержки между использованием

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.chatsetting.cooldown.bypass`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `sound`

Право для использования звука

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.command.chatsetting.sound`

Название права

#### `type`
- По умолчанию `TRUE`

Тип права
:::

<!--@include: @/ru/parts/permission.md-->

