# Оп
Путь `config.yml > module.server.message.op`

## Пояснение
Сообщение от сервера при использовании `/op`
![op](/op.png)

## Редактирование
```yaml
<config.module.server.message.op>
```

### По умолчанию
```yaml
op:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/message/op/)
- [Права](/ru/permissions/module/server/message/op/)

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
