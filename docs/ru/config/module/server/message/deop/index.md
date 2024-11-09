# Деоп
Путь `config.yml > module.server.message.deop`

## Пояснение
Сообщение от сервера при использовании `/deop`
![deop](/deop.png)

## Редактирование
```yaml
<config.module.server.message.deop>
```

### По умолчанию
```yaml
deop:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.deop"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.deop.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Деоп](/ru/messages/ru_ru/module/server/message/deop/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.deop`
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
- Название `flectonepulse.module.server.message.deop.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
