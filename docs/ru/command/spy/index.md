# Комманда /spy
Путь `command.yml > spy`

## Пояснение
Комманда для отслеживания за действиями игроков
![command spy](/commandspy.gif)

## Редактирование
```yaml
<command.spy>
```

### По умолчанию
```yaml
spy:
  enable: true
  range: -2
  aliases:
    - "spy"
  categories:
    command:
      - "tell"
    action:
      - "anvil"
      - "book"
      - "sign"
      - "chat"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/spy/)
- [Права](/ru/permission/command/spy/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `range`
- По умолчанию `-2`

[Диапазон](#виды-диапазонов), насколько далеко в блоках работает `spy`

### `aliases`
- По умолчанию `spy`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newspy`, `следить` и т.д.
:::

### `list`
- По умолчанию:
```yaml
command:
  - "tell"
action:
  - "anvil"
  - "book"
  - "sign"
  - "chat"
```

Список категорий с действиями, за которыми происходит слежка

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