# Описание
Путь `message.yml > status.motd`

## Пояснение
Модуль отвечающий за приветственное сообщение сервера
![motd](/motd.png)

## Редактирование
```yaml
<message.status.motd>
```

### По умолчанию
```yaml
motd:
  enable: true
  random: true
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/status/motd/)
- [Права](/ru/permission/message/status/motd/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение будет выбираться случайным образом, иначе по порядку