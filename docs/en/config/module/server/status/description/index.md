# Описание
Путь `config.yml > module.server.status.description`

## Пояснение
Модуль отвечающий за приветственное сообщение сервера
![motd](/motd.png)

## Редактирование
```yaml
<config.module.server.status.description>
```

### По умолчанию
```yaml
motd:
  enable: true
  random: true
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/status/description/)
- [Права](/en/permissions/module/server/status/description/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение будет выбираться случайным образом, иначе по порядку