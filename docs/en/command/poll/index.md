# Комманда /poll
Путь `command.yml > poll`

## Пояснение
Комманда для проведения голосований
![command poll](/commandpoll.png)

Когда голосование закончилось
![command poll end](/commandpollend.png)

## Редактирование
```yaml
<command.poll>
```

### По умолчанию
```yaml
poll:
  enable: true
  range: -2
  last-id: 1
  max-time: 60000
  aliases:
    - "poll"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/poll/)
- [Права](/ru/permission/command/poll/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `last-id`
- По умолчанию `1`

Последний номер созданного голосования

### `max-time`
- По умолчанию `60000`

Максимальное время голосования в секундах

### `aliases`
- По умолчанию `poll`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newpoll`, `опрос` и т.д.
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

<!--@include: @/ru/parts/range.md-->