# Комманда /mail
Путь `command.yml > mail`

## Пояснение
Комманда для того, чтобы написать оффлайн игроку письмо
![command mail](/commandmail.png)

Когда игрок, которому написали письмо, зайдёт на сервер, он увидит эти письма
![command mail player](/commandmailplayer.png)

Если игрок уже на сервере и модуль [Tell](/ru/command/tell/) включен, то он будет использован
![command tell](/commandtell.png)

## Редактирование
```yaml
<command.mail>
```

### По умолчанию
```yaml
mail:
  enable: true
  aliases:
    - "mail"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/mail/)
- [Права](/ru/permission/command/mail/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `mail`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmail`, `письмо` и т.д.
:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::