# Комманда /ignore
Путь `config.yml > module.command.command-ignore`

## Пояснение
Комманда для игнорирования всех сообщений от игрока
![command ignore](/commandignore.png)

Убирается игнорирование с помощью повторного использования
![command unignore](/commandunignore.png)

## Редактирование
```yaml
<config.module.command.command-ignore>
```

### По умолчанию
```yaml
command-ignore:
  enable: true
  online-players: false
  aliases:
    - "ignore"
  permission:
    name: "flectonepulse.module.command.ignore"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.ignore.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.ignore.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Ignore](/ru/messages/ru_ru/module/command/command-ignore/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `online-players`
- По умолчанию `false`

Если включено, то подсказывает ники игроков, которые в сети, иначе всех, кто был на сервере
::: tip Это влияет только на подсказку текста
Если будет вписан ник игрока, который **не в сети** и `online-players: true`, то комманда в любом случае выполнится без ошибок
:::

### `aliases`
- По умолчанию `ignore`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newignore`, `игнорировать` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.ignore`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.ignore.sound`
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
- Название `flectonepulse.module.command.ignore.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::