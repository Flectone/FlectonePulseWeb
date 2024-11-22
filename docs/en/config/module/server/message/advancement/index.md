# Достижение
Путь `config.yml > module.server.message.advancement`

## Пояснение
Сообщение от сервера, когда игрок получает достижение
![task](/task.png)

## Редактирование
```yaml
<config.module.server.message.advancement>
```

### По умолчанию
```yaml
advancement:
  enable: true
  grant: true
  revoke: true
  range: -1
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/message/advancement/)
- [Права](/en/permissions/module/server/message/advancement/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `revoke`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement revoke`

### `grant`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement grant`

### `range`
- По умолчанию `-1`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::

<!--@include: @/en/parts/range.md-->
