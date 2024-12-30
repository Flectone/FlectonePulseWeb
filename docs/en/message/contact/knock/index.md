# Стуки
Путь `message.yml > contact.knock`

## Пояснение
Стуки создаются с помощью **ШИФТ** и **ЛКМ** по конкретному блоку, производя звук

## Редактирование
```yaml
<message.contact.knock>
```

### По умолчанию
```yaml
knock:
  enable: false
  cooldown:
    enable: false
    duration: 60
  types:
    GLASS:
      enable: true
      type: "BLOCK_GLASS_PLACE:1:1"
    DOOR:
      enable: true
      type: "BLOCK_WOOD_PLACE:1:1"
```

## Параметры

- [Права](/ru/permission/message/contact/knock/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
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
```

### `enable`
- По умолчанию `true`
  
Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_GLASS_PLACE:1:1`

Определяет тип (`BLOCK_GLASS_PLACE`), громкость (`1`) и тональность (`1`) звука через `:`
:::