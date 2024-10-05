# Комманда /spit
Путь `config.yml > module.command.command-spit`

## Пояснение
Комманда для создания плевков
![command spit](/commandspit.gif)

::: danger Внимательно
Комманда не будет работать, если модуль [`Spit`](/ru/config/module/interaction/spit/) выключен
:::

## Редактирование
```yaml
<config.module.command.command-spit>
```

### По умолчанию
```yaml
command-spit:
  enable: true
  aliases:
    - "spit"
  permission:
    name: "flectonepulse.module.command.spit"
    type: TRUE
  cooldown:
    enable: true
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.spit.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.spit.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Spit](/ru/messages/ru_ru/module/command/command-spit/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `spit`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newspit`, `плевок` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.spit`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.spit.cooldown.ignore`
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
- Название `flectonepulse.module.command.spit.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::