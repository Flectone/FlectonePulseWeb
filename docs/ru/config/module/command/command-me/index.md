# Комманда /me
Путь `config.yml > module.command.command-me`

## Пояснение
Комманда для отображения действия
![command me](/commandme.png)

## Редактирование
```yaml
<config.module.command.command-me>
```

### По умолчанию
```yaml
command-me:
  enable: true
  range: -2
  aliases:
    - "me"
  permission:
    name: "flectonepulse.module.command.me"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.me.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.me.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Me](/ru/messages/ru_ru/module/command/command-me/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию `me`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newme`, `ми` и т.д.
![command me aliase](/commandmealiase.png)
:::

### `permission`
- Название `flectonepulse.module.command.me`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.me.cooldown.ignore`
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
- Название `flectonepulse.module.command.me.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/range.md-->