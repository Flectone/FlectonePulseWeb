# Сид
Путь `message.yml > seed`

## Пояснение
Сообщение от сервера при использовании `/seed`
![seed](/seed.png)

## Редактирование
```yaml
<message.seed>
```

### По умолчанию
```yaml
seed:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/seed/)
- [Права](/ru/permission/message/seed/)

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
