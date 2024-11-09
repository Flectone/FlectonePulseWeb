# Комманда /online
Путь `config.yml > module.command.command-online`

## Пояснение
Комманда для того, чтобы узнать информацию об онлайне игрока
![command online](/commandonline.png)

## Редактирование
```yaml
<config.module.command.command-online>
```

### По умолчанию
```yaml
command-online:
  enable: true
  online-players: false
  aliases:
    - "online"
  permission:
    name: "flectonepulse.module.command.online"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.online.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.online.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Online](/ru/messages/ru_ru/module/command/command-online/)

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
- По умолчанию `online`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newonline`, `онлайн` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.online`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.online.cooldown.ignore`
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
- Название `flectonepulse.module.command.online.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::