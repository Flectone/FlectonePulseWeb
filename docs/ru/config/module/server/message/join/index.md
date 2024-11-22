# Подключение
Путь `config.yml > module.server.message.join`

## Пояснение
Сообщение от сервера, когда игрок подключился
![join](/join.png)

## Редактирование
```yaml
<config.module.server.message.join>
```

### По умолчанию
```yaml
join:
  enable: true
  first: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/message/join/)
- [Права](/ru/permissions/module/server/message/join/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `first`
- По умолчанию `true`

Включает сообщение о самом первом подключении игрока на сервер

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::
