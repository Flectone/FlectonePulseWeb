# Комманда /mutelist
Путь `commands.yml > module.command.mutelist`

## Пояснение
Комманда для того, чтобы посмотреть список мутов

![command mutelist](/commandmutelist.png)

## Редактирование
```yaml
<commands.module.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  enable: true
  per-page: 4
  aliases:
    - "mutelist"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
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
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/command/mutelist/)
- [Права](/ru/permissions/module/command/mutelist/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `per-page`
- По умолчанию `4`

Количество компонентов на одной странице

### `aliases`
- По умолчанию `mutelist`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmutelist`, `списокмутов` и т.д.
:::

### `global`

Список всех действующих мутов

::: details Настройка GUI для комманды `/mutelist` без аргументов

#### `gui`
- По умолчанию `false`

Переключает режим просмотра списка на GUI через инвентарь

![command mutelist global gui](/commandmutelistglobalgui.png)

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

Список всех мутов игрока

::: details Настройка GUI для комманды `/mutelist ник`

#### `gui`
- По умолчанию `false`

Переключает режим просмотра списка на GUI через инвентарь

![command mutelist player gui](/commandmutelistplayergui.png)

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
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::