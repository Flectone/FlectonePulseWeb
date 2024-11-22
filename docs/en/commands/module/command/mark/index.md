# Комманда /mark
Путь `commands.yml > module.command.mark`

## Пояснение
Комманда для создания меток
![command mark](/commandmark.gif)

::: danger Внимательно
Комманда не будет работать, если модуль [`Mark`](/en/config/module/interaction/mark/) выключен
:::

## Редактирование
```yaml
<commands.module.command.mark>
```

### По умолчанию
```yaml
mark:
  enable: false
  aliases:
    - "mark"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/command/mark/)
- [Права](/en/permissions/module/command/mark/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `mark`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmark`, `метка` и т.д.
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