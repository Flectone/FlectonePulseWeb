# Комманда /clearchat
Путь `config.yml > module.command.command-clearchat`

## Пояснение
Комманда для очищения чата
![command clearchat](/commandclearchat.png)

## Редактирование
```yaml
<config.module.command.command-clearchat>
```

### По умолчанию
```yaml
command-clearchat:
  enable: true
  aliases:
    - "clearchat"
  permission:
    name: "flectonepulse.module.command.clearchat"
    type: TRUE
  permission-other:
    name: "flectonepulse.module.command.clearchat.other"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.clearchat.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.clearchat.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Clearchat](/ru/messages/ru_ru/module/command/command-clearchat/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `clearchat`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newclearchat`, `очиститьчат` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.clearchat`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для очищения чата себе

### `permission-other`
- Название `flectonepulse.module.command.clearchat.other`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для очищения чата игроку

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.clearchat.cooldown.ignore`
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
- Название `flectonepulse.module.command.clearchat.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::