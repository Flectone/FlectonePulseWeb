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
  permission:
    name: "flectonepulse.module.server.message.advancement"
    type: TRUE
  revoke:
    enable: true
  grant:
    enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.advancement.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Достижение](/ru/messages/ru_ru/module/server/message/advancement/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.advancement`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `revoke`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement revoke`

### `grant`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement grant`

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

### `permission`
- Название `flectonepulse.module.server.message.advancement.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
