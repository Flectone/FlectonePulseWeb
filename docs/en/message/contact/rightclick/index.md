# Правое нажатие
Путь `message.yml > contact.right_click`

## Пояснение
Модуль, при котором **ПКМ** по игроку создаёт сообщение над инвентарём игрока
![right click](/rightclick.png)

## Редактирование
```yaml
<message.contact.right_click>
```

### По умолчанию
```yaml
rightclick:
  enable: true
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/contact/right-click/)
- [Права](/ru/permission/message/contact/right-click/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

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