# Отключение
Путь `config.yml > module.server.message.quit`

## Пояснение
Сообщение от сервера, когда игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<config.module.server.message.quit>
```

### По умолчанию
```yaml
quit:
  enable: true
  first: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/message/quit/)
- [Права](/ru/permissions/module/server/message/quit/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `first`
- По умолчанию `true`

Включает сообщение о самом первом отключении игрока с сервера

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::
