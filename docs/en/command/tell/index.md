# Комманда /tell
Путь `command.yml > tell`

## Пояснение
Комманда для того, чтобы написать личное сообщение игроку
![command tell](/commandtell.png)

Можно использовать для заметок, если вписать свой же ник
![command tell myself](/commandtellmyself.png)

## Редактирование
```yaml
<command.tell>
```

### По умолчанию
```yaml
tell:
  enable: true
  suggest-offline-players: false
  aliases:
    - "tell"
    - "msg"
    - "w"
    - "message"
    - "send"
    - "m"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/tell/)
- [Права](/ru/permission/command/tell/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `suggest-offline-players`
- По умолчанию `false`

Если включено, то подсказывает все ники игроков, кто был на сервере, иначе только ники игроков, которые в сети
::: tip ИНФОРМАЦИЯ
Это влияет только на подсказку текста
:::

### `aliases`
- По умолчанию:
```yaml
- "tell"
- "msg"
- "w"
- "message"
- "send"
- "m"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newtell`, `сообщение` и т.д.
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