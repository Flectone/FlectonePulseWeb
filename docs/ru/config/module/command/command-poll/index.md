# Комманда /poll
Путь `config.yml > module.command.command-poll`

## Пояснение
Комманда для проведения голосований
![command poll](/commandpoll.png)

Когда голосование закончилось
![command poll end](/commandpollend.png)

## Редактирование
```yaml
<config.module.command.command-poll>
```

### По умолчанию
```yaml
command-poll:
  enable: true
  range: -2
  last-number: 1
  max-time: 60000
  aliases:
    - "poll"
  permission:
    name: "flectonepulse.module.command.poll"
    type: TRUE
  permission-create:
    name: "flectonepulse.module.command.poll.create"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.poll.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.poll.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Poll](/ru/messages/ru_ru/module/command/command-poll/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `last-number`
- По умолчанию `1`

Последний номер созданного голосования

### `max-time`
- По умолчанию `60000`

Максимальное время голосования в секундах

### `aliases`
- По умолчанию `poll`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newpoll`, `опрос` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.poll`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для голосования

### `permission-create`
- Название `flectonepulse.module.command.poll.create`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для создания голосования

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.poll.cooldown.ignore`
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
- Название `flectonepulse.module.command.poll.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->