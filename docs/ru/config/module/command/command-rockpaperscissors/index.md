# Комманда /rockpaperscissors
Путь `config.yml > module.command.command-rockpaperscissors`

## Пояснение
Комманда для того, чтобы предложить поиграть в камень-ножницы-бумага
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<config.module.command.command-rockpaperscissors>
```

### По умолчанию
```yaml
command-rockpaperscissors:
  enable: true
  aliases:
    - "rps"
    - "rockpaperscissors"
  permission:
    name: "flectonepulse.module.command.rockpaperscissors"
    type: TRUE
  strategy:
    scissors:
      - "paper"
    rock:
      - "scissors"
    paper:
      - "rock"
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.rockpaperscissors.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.rockpaperscissors.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Rockpaperscissors](/ru/messages/ru_ru/module/command/command-rockpaperscissors/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию:
```yaml
- "rps"
- "rockpaperscissors"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newrps`, `кнб` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.rockpaperscissors`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `strategy`

Стратегии, где `ключом` является тот, кто побеждает `значение`

::: tip Например я хочу, чтобы `ножницы` побеждали `paper`
Значит я должен написать
```yaml
scissors:
  - "paper"
```

Значений может быть несколько т.е.
```yaml
scissors:
  - "paper"
  - "newitem"
```

Можно сделать свои ключи и значения
```yaml
customvalue:
  - "customobject"
```
:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.rockpaperscissors.cooldown.ignore`
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
- Название `flectonepulse.module.command.rockpaperscissors.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::