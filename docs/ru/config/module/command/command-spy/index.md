# Комманда /spy
Путь `config.yml > module.command.command-spy`

## Пояснение
Комманда для отслеживания за действиями игроков
![command spy](/commandspy.gif)

## Редактирование
```yaml
<config.module.command.command-spit>
```

### По умолчанию
```yaml
command-spy:
  enable: true
  range: -2
  aliases:
    - "spy"
  list:
    command:
      - "tell"
    action:
      - "anvil"
      - "book"
      - "sign"
      - "chat"
  permission:
    name: "flectonepulse.module.command.spy"
    type: OP
  listener:
    PlayerCommandPreprocessEvent: NORMAL
    InventoryClickEvent: NORMAL
    PlayerEditBookEvent: NORMAL
    SignChangeEvent: NORMAL
    AsyncPlayerChatEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.spy.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.spy.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Spy](/ru/messages/ru_ru/module/command/command-spy/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках работает `spy`

### `aliases`
- По умолчанию `spy`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newspy`, `следить` и т.д.
:::

### `list`
- По умолчанию:
```yaml
command:
  - "tell"
action:
  - "anvil"
  - "book"
  - "sign"
  - "chat"
```

Список категорий с действиями, за которыми происходит слежка

### `permission`
- Название `flectonepulse.module.command.spy`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
PlayerCommandPreprocessEvent: NORMAL
InventoryClickEvent: NORMAL
PlayerEditBookEvent: NORMAL
SignChangeEvent: NORMAL
AsyncPlayerChatEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.spy.cooldown.ignore`
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
- Название `flectonepulse.module.command.spy.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/listener.md-->