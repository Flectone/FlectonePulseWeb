# Зачарование
Путь `config.yml > module.server.message.enchant`

## Пояснение
Сообщение от сервера при использовании `/enchant`
![enchant](/enchant.png)

## Редактирование
```yaml
<config.module.server.message.enchant>
```

### По умолчанию
```yaml
enchant:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/server/message/enchant/)
- [Права](/ru/permissions/module/server/message/enchant/)

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
