# Комманда /unwarn
Путь `config.yml > module.command.command-unwarn`

## Пояснение
Комманда для того, чтобы снять предупреждение с игрока
![command unwarn](/commandunwarn.png)

## Редактирование
```yaml
<config.module.command.command-unwarn>
```

### По умолчанию
```yaml
command-unwarn:
  enable: true
  aliases:
    - "unwarn"
  permission:
    name: "flectonepulse.module.command.unwarn"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.unwarn.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.unwarn.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Unwarn](/ru/messages/ru_ru/module/command/command-unwarn/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `unwarn`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newunwarn`, `снятьварн` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.unwarn`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.unwarn.cooldown.ignore`
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
- Название `flectonepulse.module.command.unwarn.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::