# Комманда /rockpaperscissors
Путь `command.yml > rockpaperscissors`

## Пояснение
Комманда для того, чтобы предложить поиграть в камень-ножницы-бумага
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<command.rockpaperscissors>
```

### По умолчанию
```yaml
rockpaperscissors:
  enable: true
  aliases:
    - "rockpaperscissors"
    - "rps"
  strategies:
    rock:
      - "scissors"
    paper:
      - "rock"
    scissors:
      - "paper"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/rockpaperscissors/)
- [Права](/ru/permission/command/rockpaperscissors/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию:
```yaml
- "rockpaperscissors"
- "rps"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newrps`, `кнб` и т.д.
:::

### `strategy`

Стратегии, где `ключом` является тот, кто побеждает `значение`

::: tip Например я хочу, чтобы `ножницы` побеждали `paper`
Значит я должен написать
```yaml
scissors:
  - "paper"
```

Значений может быть несколько т.е.
```yaml
scissors:
  - "paper"
  - "newitem"
```

Можно сделать свои ключи и значения
```yaml
customvalue:
  - "customobject"
```
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