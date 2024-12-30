# Зачарование
Путь `message.yml > enchant`

## Пояснение
Сообщение от сервера при использовании `/enchant`
![enchant](/enchant.png)

## Редактирование
```yaml
<message.enchant>
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

- [Локализация](/ru/localizations/ru_ru/message/enchant/)
- [Права](/ru/permission/message/enchant/)

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
