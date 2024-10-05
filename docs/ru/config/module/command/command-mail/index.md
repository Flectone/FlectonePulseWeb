# Комманда /mail
Путь `config.yml > module.command.command-mail`

## Пояснение
Комманда для того, чтобы написать оффлайн игроку письмо
![command mail](/commandmail.png)

Когда игрок, которому написали письмо, зайдёт на сервер, он увидит эти письма
![command mail player](/commandmailplayer.png)

Если игрок уже на сервере и модуль [Tell](/ru/config/module/command/command-tell/) включен, то он будет использован
![command tell](/commandtell.png)

## Редактирование
```yaml
<config.module.command.command-mail>
```

### По умолчанию
```yaml
command-mail:
  enable: true
  aliases:
    - "mail"
  permission:
    name: "flectonepulse.module.command.mail"
    type: TRUE
  listener:
    PlayerJoinEvent: MONITOR
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.mail.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mail.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Mail](/ru/messages/ru_ru/module/command/command-mail/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `mail`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmail`, `письмо` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.mail`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию `PlayerJoinEvent: MONITOR`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.mail.cooldown.ignore`
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
- Название `flectonepulse.module.command.mail.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

<!--@include: @/ru/parts/listener.md-->