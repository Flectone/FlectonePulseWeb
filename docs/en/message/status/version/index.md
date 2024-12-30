# Версия
Путь `message.yml > status.protocol`

## Пояснение
Модуль отвечающий за версию сервера
![version](/version.png)

## Редактирование
```yaml
<message.status.players>
```

### По умолчанию
```yaml
version:
  enable: false
  protocol: -1
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/status/version/)
- [Права](/ru/permission/message/status/version/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `protocol`
- По умолчанию `-1`

[Протокол](https://minecraft.wiki/w/Protocol_version) сервера

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-1` указывает на текущий протокол

:::