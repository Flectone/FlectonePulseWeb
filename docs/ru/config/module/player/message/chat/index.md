# Чат
Путь `config.yml > module.player.message.chat`

## Пояснение
Модуль, отвечающий за отправленные сообщения игроком в чат

## Редактирование
```yaml
<config.module.player.message.chat>
```

### По умолчанию
```yaml
chat:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.chat"
    type: TRUE
  type:
    local:
      enable: true
      range: 100
      priority: 0
      null-recipient: true
      cancel: true
      trigger: ""
      permission:
        name: "flectonepulse.module.player.message.chat.local"
        type: TRUE
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.player.message.chat.local.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.player.message.chat.local.sound"
          type: TRUE
    global:
      enable: true
      range: -2
      priority: 5
      null-recipient: true
      cancel: false
      trigger: "!"
      permission:
        name: "flectonepulse.module.player.message.chat.global"
        type: TRUE
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.player.message.chat.global.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.player.message.chat.global.sound"
          type: TRUE
listener:
  AsyncPlayerChatEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.chat`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `type`

Список всех чатов с их [настройкой](#настройка-чата), можно добавлять свои

### `listener`
- По умолчанию:
```yaml
AsyncPlayerChatEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

## Настройка чата

- Формат сообщения изменяется тут [Чат](/ru/messages/ru_ru/module/player/message/chat/)

Любой чат по умолчанию выглядит так

```yaml
название_чата:
  enable: true
  range: число
  priority: число
  null-recipient: true
  cancel: true
  trigger: "триггер"
  permission:
    name: "flectonepulse.module.player.message.chat.название_чата"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.player.message.chat.название_чата.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.player.message.chat.название_чата.sound"
      type: TRUE
```

### `enable`

Включает работоспособность чата

### `range`

[Диапазон](#виды-диапазонов) чата, насколько далеко в блоках должен работать чат


### `priority`

Приоритет чата, который используется для выбора, когда у нескольких чатов одинаковый `trigger`. Выбирается тот, у кого приоритет больше

::: tip Например есть чаты
```yaml
admin:
  priority: 20
  trigger: "!" // [!code highlight]
helper:
  priority: 10
  trigger: "!" // [!code highlight]
```

Если игрок имеет право на оба чата, то плагином выбран будет `admin` т.к. у него больше `priority`
:::

### `null-recipient`

- Сообщение изменяется тут [Чат](/ru/messages/ru_ru/module/player/message/chat/)

Включает сообщение о том, что отправленное сообщение никто не увидел
![null recipient](/nullrecipient.png)

### `cancel`

- Если `true`, то ивент сообщения чата отменяется для других плагинов

- Если необходимо, чтобы другой плагин, связанный с чатом - работал, то нужно ставить `false`
::: tip Например по умолчанию чат `global` имеет `cancel: false`
Чтобы глобальные сообщения также обрабатывались другими плагинами (по типу DiscordSRV, InteractiveChat и т.д.)
:::
::: warning Если `false`, то это вызывает дублирование сообщения в консоль
![chat console](/chatconsole.png)
:::

### `trigger`

Сообщение, с которого должно начинаться отправленное сообщение для [типа](#type) чата

::: tip Значение `trigger` может быть каким угодно:
- `!`, `admin`, `.f` и т.д.
- пустым т.е. `trigger: ""`, тогда для этого [типа](#type) чата подходит любое сообщение
:::

В итоговом сообщении `trigger` удаляется, т.е. если игрок отправил `!привет`, в итоге будет `привет` без `!`

### `permission`

[Право](/ru/config/module/#пояснение) для использования чата

### `cooldown`

Включает задержку для игрока между использованием чата

::: details Настройка задержки
#### `duration`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованием

#### `permission-ignore`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/listener.md-->

<!--@include: @/ru/parts/range.md-->
