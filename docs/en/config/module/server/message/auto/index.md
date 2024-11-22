# Автоматическое
Путь `config.yml > module.server.message.auto`

## Пояснение
Сообщение от сервера раз в какой-то промежуток времени
![auto](/auto.png)

## Редактирование
```yaml
<config.module.server.message.auto>
```

### По умолчанию
```yaml
auto:
  enable: false
  random: true
  ticker:
    enable: true
    period: 9000
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/message/auto/)
- [Права](/en/permissions/module/server/message/auto/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщения для отправки будут выбираться случайным образом, иначе по порядку

### `ticker`
- `enable: true`

Нужно ли отправлять сообщение раз в какой-то промежуток времени

- `period: 9000`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно отправлять сообщение

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::
