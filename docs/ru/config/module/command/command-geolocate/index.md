# Комманда /geolocate
Путь `config.yml > module.command.command-geolocate`

## Пояснение
Комманда для отслеживания IP-адреса и получения информации об игроке
![command geolocate](/commandgeolocate.png)

## Редактирование
```yaml
<config.module.command.command-geolocate>
```

### По умолчанию
```yaml
command-geolocate:
  enable: true
  online-players: false
  aliases:
    - "geolocate"
  permission:
    name: "flectonepulse.module.command.geolocate"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.geolocate.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.geolocate.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Geolocate](/ru/messages/ru_ru/module/command/command-geolocate/)

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
- По умолчанию `geolocate`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newgeolocate`, `геолокация` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.geolocate`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.geolocate.cooldown.ignore`
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
- Название `flectonepulse.module.command.geolocate.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::