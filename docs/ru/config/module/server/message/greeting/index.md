# Приветствие
Путь `config.yml > module.server.message.greeting`

## Пояснение
Сообщение от сервера лично игроку, когда он подключился
![greeting](/greeting.png)

## Редактирование
```yaml
<config.module.server.message.greeting>
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

- [Сообщения](/ru/messages/ru_ru/module/server/message/greeting/)
- [Права](/ru/permissions/module/server/message/greeting/)

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
