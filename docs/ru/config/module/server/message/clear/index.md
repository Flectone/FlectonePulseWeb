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
  permission:
    name: "flectonepulse.module.server.message.clear"
    type: TRUE
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.clear.sound"
      type: TRUE
```

## Параметры

- Сообщения изменяются тут [Очищение](/ru/messages/ru_ru/module/server/message/clear/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.clear`
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
- Название `flectonepulse.module.server.message.clear.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::
