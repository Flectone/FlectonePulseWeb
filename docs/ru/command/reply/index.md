# Комманда /reply
Путь `command.yml > reply`

## Пояснение
Комманда для того, чтобы написать личное сообщение последнему написавшему игроку
![command reply](/commandreply.png)

::: danger Внимательно
Комманда не будет работать, если модуль [`Tell`](/ru/command/tell/) выключен
:::

## Редактирование
```yaml
<command.reply>
```

### По умолчанию
```yaml
reply:
  enable: true
  aliases:
    - "reply"
    - "r"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/reply/)
- [Права](/ru/permission/command/reply/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию:
```yaml
- "reply"
- "r"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newreply`, `ответить` и т.д.
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