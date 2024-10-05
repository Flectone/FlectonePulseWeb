# Стуки
Путь `config.yml > module.interaction.knock`

## Пояснение
Стуки создаются с помощью **ШИФТ** и **ЛКМ** по конкретному блоку, производя звук

## Редактирование
```yaml
<config.module.interaction.knock>
```

### По умолчанию
```yaml
knock:
  enable: true
  permission:
    name: "flectonepulse.module.interaction.knock"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.interaction.knock.cooldown.ignore"
      type: OP
  type:
    GLASS:
      enable: true
      type: "BLOCK_GLASS_PLACE:1:1"
      permission:
        name: "flectonepulse.module.interaction.knock.sound.glass"
        type: TRUE
    DOOR:
      enable: true
      type: "BLOCK_WOOD_PLACE:1:1"
      permission:
        name: "flectonepulse.module.interaction.knock.sound.door"
        type: TRUE
  listener:
    PlayerInteractEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.interaction.knock`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями

#### `permission-ignore`
- Название `flectonepulse.module.interaction.knock.cooldown.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования задержки
:::

### `type`

Список названий блоков и звуков стука

Можно создавать свои стуки и название блока может быть неполным, а лишь содержать ключевое слово

::: tip Например я хочу сделать стук для всех видов стекла
Тогда я напишу название `GLASS`, потому что оно встречается во всех названиях стёкл

```yaml
GLASS:
  enable: true
  type: "BLOCK_GLASS_PLACE:1:1"
  permission:
    name: "flectonepulse.module.interaction.knock.sound.glass"
    type: TRUE            
```

### `enable`
- По умолчанию `true`
  
Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_GLASS_PLACE:1:1`

Определяет тип (`BLOCK_GLASS_PLACE`), громкость (`1`) и тональность (`1`) звука через `:`

#### `permission`
- Название `flectonepulse.module.interaction.knock.sound.glass`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию `PlayerInteractEvent: NORMAL`

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->