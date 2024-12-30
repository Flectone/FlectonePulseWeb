# Комманда /clearmail
Путь `command.yml > clearmail`

## Пояснение
Комманда для удаления отправленных [писем](/ru/commands/mail/)
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  enable: true
  aliases:
    - "clearmail"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/clearmail/)
- [Права](/ru/permission/command/clearmail/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `clearmail`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newclearmail`, `удалитьписьмо` и т.д.
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