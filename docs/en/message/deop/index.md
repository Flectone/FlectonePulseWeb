# Деоп
Путь `message.yml > deop`

## Пояснение
Сообщение от сервера при использовании `/deop`
![deop](/deop.png)

## Редактирование
```yaml
<message.deop>
```

### По умолчанию
```yaml
deop:
  enable: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/deop/)
- [Права](/ru/permission/message/deop/)

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
