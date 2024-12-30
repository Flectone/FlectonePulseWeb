# Комманда /banlist
Путь `command.yml > banlist`

## Пояснение
Комманда для того, чтобы посмотреть список блокировок
![command banlist](/commandbanlist.png)

## Редактирование
```yaml
<command.banlist>
```

### По умолчанию
```yaml
banlist:
  enable: true
  per-page: 4
  aliases:
    - "banlist"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/banlist/)
- [Права](/ru/permission/command/banlist/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `per-page`
- По умолчанию `4`

Количество компонентов на одной странице

### `aliases`
- По умолчанию `banlist`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newbanlist`, `списокбанов` и т.д.
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