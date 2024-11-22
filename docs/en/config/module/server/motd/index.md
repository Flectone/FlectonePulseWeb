# МОТД
Путь `config.yml > module.server.motd`

## Пояснение
Модуль отвечающий за приветственное сообщение сервера
![motd](/motd.png)

## Редактирование
```yaml
<config.module.server.motd>
```

### По умолчанию
```yaml
motd:
  enable: true
  random: true
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/motd/)
- [Права](/en/permissions/module/server/motd/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `random`
- По умолчанию `true`

Если включено, то сообщение будет выбираться случайным образом, иначе по порядку