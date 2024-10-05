# Комманда /tictactoe
Путь `config.yml > module.command.command-tictactoe`

## Пояснение
Комманда для того, чтобы предложить поиграть в крестики-нолики
![command tictactoe](/commandtictactoe.png)

По умолчанию кидается запрос в [китайские крестики-нолики](#правила-китайских-крестиков-ноликов), если хочешь в обычные, то используй `/tictactoe ник false`
![command tictactoe default](/commandtictactoedefault.png)

## Редактирование
```yaml
<config.module.command.command-tictactoe>
```

### По умолчанию
```yaml
command-tictactoe:
  enable: true
  aliases:
    - "ttt"
    - "tictactoe"
  permission:
    name: "flectonepulse.module.command.tictactoe"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.tictactoe.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.tictactoe.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Tictactoe](/ru/messages/ru_ru/module/command/command-tictactoe/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию:
```yaml
- "ttt"
- "tictactoe"
```

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newtictactoe`, `крестики-нолики` и т.д.
:::

### `permission`
- Название `flectonepulse.module.command.tictactoe`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.tictactoe.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.command.tictactoe.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### Правила китайских крестиков-ноликов

1. Каждый игрок может поставить только `3` своих метки
2. Если игра не закончилась, то первая метка, которая была поставлена игроком убирается и ставится новая
3. И так по кругу, пока игра не закончится

В итоге игра становится непредсказуемой, со стратегией и сложной!