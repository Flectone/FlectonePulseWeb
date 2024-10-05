# Комманда /reply
Путь `config.yml > module.command.command-reply`

## Пояснение
Комманда для того, чтобы написать личное сообщение последнему написавшему игроку
![command reply](/commandreply.png)

::: danger Внимательно
Комманда не будет работать, если модуль [`Tell`](/ru/config/module/command/command-tell/) выключен
:::

## Редактирование
```yaml
<config.module.command.command-reply>
```

### По умолчанию
```yaml
command-reply:
  enable: true
  aliases:
    - "r"
    - "reply"
  permission:
    name: "flectonepulse.module.command.reply"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.reply.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.reply.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Reply](/ru/messages/ru_ru/module/command/command-reply/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию:
```yaml
- "r"
- "reply"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newreply`, `ответить` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.reply`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.reply.cooldown.ignore`
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
- Название `flectonepulse.module.command.reply.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::