# Комманда /warnlist
Путь `command.yml > warnlist`

## Пояснение
Комманда для того, чтобы посмотреть список варнов

![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  enable: true
  per-page: 4
  aliases:
    - "warnlist"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/warnlist/)
- [Права](/ru/permission/command/warnlist/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `per-page`
- По умолчанию `4`

Количество компонентов на одной странице

### `aliases`
- По умолчанию `warnlist`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newwarnlist`, `списокварнов` и т.д.
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::