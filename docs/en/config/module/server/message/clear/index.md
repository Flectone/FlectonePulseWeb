# Очищение
Путь `config.yml > module.server.message.clear`

## Пояснение
Сообщение от сервера при использовании `/clear`
![clear](/clear.png)

## Редактирование
```yaml
<config.module.server.message.clear>
```

### По умолчанию
```yaml
clear:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/message/clear/)
- [Права](/en/permissions/module/server/message/clear/)

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
