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
  permission:
    name: "flectonepulse.module.server.message.op"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.op.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Оп](/ru/messages/ru_ru/module/server/message/op/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.op`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

### `permission`
- Название `flectonepulse.module.server.message.op.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
