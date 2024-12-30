# Комманда /unmute
Путь `command.yml > unmute`

## Пояснение
Комманда для того, чтобы размутить игрока
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<command.unmute>
```

### По умолчанию
```yaml
unmute:
  enable: true
  aliases:
    - "unmute"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/unmute/)
- [Права](/ru/permission/command/unmute/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `unmute`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newunmute`, `размутить` и т.д.
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