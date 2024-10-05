# Комманда /afk
Путь `config.yml > module.command.command-afk`

## Пояснение
Комманда для смены режима AFK
![afk](/afkglobalmessage.png)

::: danger Внимательно
Комманда не будет работать, если модуль [`AFK`](/ru/config/module/player/afk/) выключен
:::

## Редактирование
```yaml
<config.module.command.command-afk>
```

### По умолчанию
```yaml
command-afk:
  enable: true
  aliases:
    - "afk"
  permission:
    name: "flectonepulse.module.command.afk"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.afk.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.afk.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Afk](/ru/messages/ru_ru/module/command/command-afk/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `afk`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newafk`, `афк` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.afk`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.afk.cooldown.ignore`
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
- Название `flectonepulse.module.command.afk.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::