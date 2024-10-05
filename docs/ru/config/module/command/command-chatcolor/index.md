# Комманда /chatcolor
Путь `config.yml > module.command.command-chatcolor`

## Пояснение
Комманда для смены [цветов](/ru/config/module/tag/color/)
![command chatcolor](/commandchatcolor.png)


## Редактирование
```yaml
<config.module.command.command-chatcolor>
```

### По умолчанию
```yaml
command-chatcolor:
  enable: true
  aliases:
    - "chatcolor"
  permission:
    name: "flectonepulse.module.command.chatcolor"
    type: TRUE
  permission-other:
    name: "flectonepulse.module.command.chatcolor.other"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.chatcolor.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.chatcolor.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Chatcolor](/ru/messages/ru_ru/module/command/command-chatcolor/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `chatcolor`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newchatcolor`, `цветачата` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.chatcolor`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для смены цветов себе

### `permission-other`
- Название `flectonepulse.module.command.chatcolor.other`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для смены цветов другим игрокам
![command chatcolor other](/commandchatcolorother.png)

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.chatcolor.cooldown.ignore`
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
- Название `flectonepulse.module.command.chatcolor.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::