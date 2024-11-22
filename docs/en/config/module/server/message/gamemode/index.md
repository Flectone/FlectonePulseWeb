# Режим игры
Путь `config.yml > module.server.message.gamemode`

## Пояснение
Сообщение от сервера, когда игрок изменил режим игры
![gamemode](/gamemode.png)

## Редактирование
```yaml
<config.module.server.message.gamemode>
```

### По умолчанию
```yaml
gamemode:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/message/gamemode/)
- [Права](/en/permissions/module/server/message/gamemode/)

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
