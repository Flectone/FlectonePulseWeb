# Приветствие
Путь `message.yml > greeting`

## Пояснение
Сообщение от сервера лично игроку, когда он подключился
![greeting](/greeting.png)

## Редактирование
```yaml
<message.greeting>
```

### По умолчанию
```yaml
greeting:
  enable: false
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/greeting/)
- [Права](/ru/permission/message/greeting/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::
