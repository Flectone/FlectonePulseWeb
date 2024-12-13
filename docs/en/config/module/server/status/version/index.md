# Версия
Путь `config.yml > module.server.status.protocol`

## Пояснение
Модуль отвечающий за версию сервера
![version](/version.png)

## Редактирование
```yaml
<config.module.server.status.players>
```

### По умолчанию
```yaml
version:
  enable: false
  protocol: -1
```

## Параметры

- [Сообщения](/en/messages/ru_ru/module/server/status/version/)
- [Права](/en/permissions/module/server/status/version/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `protocol`
- По умолчанию `-1`

[Протокол](https://minecraft.wiki/w/Protocol_version) сервера

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-1` указывает на текущий протокол

:::