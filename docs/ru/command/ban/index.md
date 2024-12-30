# Комманда /ban
Путь `command.yml > ban`

## Пояснение
Комманда для того, чтобы заблокировать игрока
![command ban](/commandban.png)

От лица игрока
![command ban player](/commandbanplayer.png)

## Редактирование
```yaml
<command.ban>
```

### По умолчанию
```yaml
ban:
  enable: true
  suggest-offline-players: true
  show-connection-attempts: true
  range: -2
  aliases:
    - "ban"
    - "tempban"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/ban/)
- [Права](/ru/permission/command/ban/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `suggest-offline-players`
- По умолчанию `true`

Если включено, то подсказывает все ники игроков, кто был на сервере, иначе только ники игроков, которые в сети
::: tip ИНФОРМАЦИЯ
Это влияет только на подсказку текста
:::

### `show-connection-attempts`
- По умолчанию `true`

Если включено, то будет показывать сообщение, что заблокированный игрок пытался подключиться
![command ban connect](/commandbanconnect.png)

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `aliases`
- По умолчанию:
```yaml
- "ban"
- "tempban"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newban`, `заблокировать` и т.д.
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

<!--@include: @/ru/parts/range.md-->