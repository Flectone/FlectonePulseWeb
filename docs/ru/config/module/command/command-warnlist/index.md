# Комманда /warnlist
Путь `config.yml > module.command.command-warnlist`

## Пояснение
Комманда для того, чтобы посмотреть список варнов

![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<config.module.command.command-warnlist>
```

### По умолчанию
```yaml
command-warnlist:
  enable: true
  range: -2
  per-page: 4
  aliases:
    - "warnlist"
  permission:
    name: "flectonepulse.module.command.warnlist"
    type: OP
  global:
    gui:
      enable: false
      size: 45
      previous-material: "RED_STAINED_GLASS_PANE"
      next-material: "GREEN_STAINED_GLASS_PANE"
  player:
    gui:
      enable: false
      size: 45
      previous-material: "RED_STAINED_GLASS_PANE"
      next-material: "GREEN_STAINED_GLASS_PANE"
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.warnlist.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.warnlist.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Warnlist](/ru/messages/ru_ru/module/command/command-warnlist/)

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

### `permission`
- Название `flectonepulse.module.command.warnlist`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `global`

Список всех действующих предупреждений

::: details Настройка GUI для комманды `/warnlist` без аргументов

#### `gui`
- По умолчанию `false`

Переключает режим просмотра списка на GUI через инвентарь

![command warnlist global gui](/commandwarnlistglobalgui.png)

#### `size`
- По умолчанию `45`

Размер инвентаря, в котором будет список

#### Нужно понимать
1. Размер должен соответствовать размерам инвентарей, которые встречаются в майнкрафте
2. Нижняя часть инвентаря будет занята [previos-material](#previos-material) и [next-material](#next-material)

#### `previos-material`
- По умолчанию `RED_STAINED_GLASS_PANE`

Название [предмета](https://ru.minecraft.wiki/w/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B), который будет использоваться для переключения на прошлую страницу списка

#### `next-material`
- По умолчанию `GREEN_STAINED_GLASS_PANE`

Название [предмета](https://ru.minecraft.wiki/w/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B), который будет использоваться для переключения на следующую страницу списка

:::

### `player`

Список всех предупреждений игрока

::: details Настройка GUI для комманды `/warnlist ник`

#### `gui`
- По умолчанию `false`

Переключает режим просмотра списка на GUI через инвентарь

![command warnlist player gui](/commandwarnlistplayergui.png)

#### `size`
- По умолчанию `45`

Размер инвентаря, в котором будет список

#### Нужно понимать
1. Размер должен соответствовать размерам инвентарей, которые встречаются в майнкрафте
2. Нижняя часть инвентаря будет занята [previos-material](#previos-material) и [next-material](#next-material)

#### `previos-material`
- По умолчанию `RED_STAINED_GLASS_PANE`

Название [предмета](https://ru.minecraft.wiki/w/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B), который будет использоваться для переключения на прошлую страницу списка

#### `next-material`
- По умолчанию `GREEN_STAINED_GLASS_PANE`

Название [предмета](https://ru.minecraft.wiki/w/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B), который будет использоваться для переключения на следующую страницу списка

:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.command.warnlist.cooldown.ignore`
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
- Название `flectonepulse.module.command.warnlist.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::