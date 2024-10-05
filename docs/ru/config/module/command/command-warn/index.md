# Комманда /warn
Путь `config.yml > module.command.command-warn`

## Пояснение
Комманда для того, чтобы дать предупреждение игроку
![command warn](/commandwarn.png)

## Редактирование
```yaml
<config.module.command.command-warn>
```

### По умолчанию
```yaml
command-warn:
  enable: true
  online-players: false
  range: -2
  aliases:
    - "warn"
  actions:
    5: "ban <target>"
    3: "ban <target> 1h"
    2: "mute <target> 1h"
  permission:
    name: "flectonepulse.module.command.warn"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.warn.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.warn.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Warn](/ru/messages/ru_ru/module/command/command-warn/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `online-players`
- По умолчанию `false`

Если включено, то подсказывает ники игроков, которые в сети, иначе всех, кто был на сервере
::: tip Это влияет только на подсказку текста
Если будет вписан ник игрока, который **не в сети** и `online-players: true`, то комманда в любом случае выполнится без ошибок
:::

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `warn`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newwarn`, `варн` и т.д.
:::

### `actions`
- По умолчанию:
```yaml
5: "ban <target>"
3: "ban <target> 1h"
2: "mute <target> 1h"
```

Список, где ключом является `количество` предупреждений и значением `действие`, которое должно выполниться

::: tip Например я хочу, чтобы при `10` варнов игрока банило
Тогда я должен вписать `10: ban <target> ohh`. Действие выполнится если у игрока будет `10` активных предупреждений
:::

### `permission`
- Название `flectonepulse.module.command.warn`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.warn.cooldown.ignore`
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
- Название `flectonepulse.module.command.warn.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->