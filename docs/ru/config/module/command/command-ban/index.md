# Комманда /ban
Путь `config.yml > module.command.command-ban`

## Пояснение
Комманда для того, чтобы заблокировать игрока
![command ban](/commandban.png)

От лица игрока
![command ban player](/commandbanplayer.png)

## Редактирование
```yaml
<config.module.command.command-ban>
```

### По умолчанию
```yaml
command-ban:
  enable: true
  online-players: false
  show-try-connect: true
  range: -2
  aliases:
    - "tempban"
    - "ban"
  permission:
    name: "flectonepulse.module.command.ban"
    type: OP
  listener:
    AsyncPlayerPreLoginEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.ban.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.ban.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Ban](/ru/messages/ru_ru/module/command/command-ban/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `online-players`
- По умолчанию `false`

Если включено, то подсказывает ники игроков, которые в сети, иначе всех, кто был на сервере
::: tip Это влияет только на подсказку текста
Если будет вписан ник игрока, который **не в сети** и `online-players: true`, то комманда в любом случае выполнится без ошибок
:::

### `show-try-connect`
- По умолчанию `true`

Если включено, то будет показывать сообщение, что заблокированный игрок пытался подключиться
![command ban connect](/commandbanconnect.png)

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `ban`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newban`, `заблокировать` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.ban`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию `AsyncPlayerPreLoginEvent: LOWEST`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.ban.cooldown.ignore`
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
- Название `flectonepulse.module.command.ban.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->
<!--@include: @/ru/parts/listener.md-->