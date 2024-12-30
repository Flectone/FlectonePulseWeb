# Сетблок
Путь `message.yml > setblock`

## Пояснение
Сообщение от сервера при использовании `/setblock`
![setblock](/setblock.png)

## Редактирование
```yaml
<message.setblock>
```

### По умолчанию
```yaml
setblock:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/setblock/)
- [Права](/ru/permission/message/setblock/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::
