# Комманда /mark
Путь `config.yml > module.command.command-mark`

## Пояснение
Комманда для создания меток
![command mark](/commandmark.gif)

::: danger Внимательно
Комманда не будет работать, если модуль [`Mark`](/ru/config/module/interaction/mark/) выключен
:::

## Редактирование
```yaml
<config.module.command.command-mark>
```

### По умолчанию
```yaml
command-mark:
  enable: true
  aliases:
    - "mark"
  permission:
    name: "flectonepulse.module.command.mark"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.mark.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mark.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Mark](/ru/messages/ru_ru/module/command/command-mark/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `mark`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmark`, `метка` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.mark`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.mark.cooldown.ignore`
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
- Название `flectonepulse.module.command.mark.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::