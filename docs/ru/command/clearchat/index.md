# Комманда /clearchat
Путь `command.yml > clearchat`

## Пояснение
Комманда для очищения чата
![command clearchat](/commandclearchat.png)

## Редактирование
```yaml
<command.clearchat>
```

### По умолчанию
```yaml
clearchat:
  enable: true
  aliases:
    - "clearchat"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/clearchat/)
- [Права](/ru/permission/command/clearchat/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `clearchat`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newclearchat`, `очиститьчат` и т.д.
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