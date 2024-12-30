# Комманда /ignore
Путь `command.yml > ignore`

## Пояснение
Комманда для игнорирования всех сообщений от игрока
![command ignore](/commandignore.png)

Убирается игнорирование с помощью повторного использования
![command unignore](/commandunignore.png)

## Редактирование
```yaml
<command.ignore>
```

### По умолчанию
```yaml
ignore:
  enable: true
  suggest-offline-players: true
  aliases:
    - "ignore"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/ignore/)
- [Права](/ru/permission/command/ignore/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `suggest-offline-players`
- По умолчанию `true`

Если включено, то подсказывает все ники игроков, кто был на сервере, иначе только ники игроков, которые в сети
::: tip ИНФОРМАЦИЯ
Это влияет только на подсказку текста
:::

### `aliases`
- По умолчанию `ignore`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newignore`, `игнорировать` и т.д.
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