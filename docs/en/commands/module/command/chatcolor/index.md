# Комманда /chatcolor
Путь `commands.yml > module.command.chatcolor`

## Пояснение
Комманда для смены [цветов](/en/config/module/tag/color/)
![command chatcolor](/commandchatcolor.png)


## Редактирование
```yaml
<commands.module.command.chatcolor>
```

### По умолчанию
```yaml
chatcolor:
  enable: true
  aliases:
    - "chatcolor"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/command/chatcolor/)
- [Права](/en/permissions/module/command/chatcolor/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `chatcolor`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newchatcolor`, `цветачата` и т.д.
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