# Над головой
Путь `message.yml > bubble`

## Пояснение
Модуль, отвечающий за сообщения над головой
![bubble](/bubble.gif)

Идея взята из [LightChatBubbles](https://github.com/atesin/LightChatBubbles)

## Редактирование
```yaml
<message.bubble>
```

### По умолчанию
```yaml
bubble:
  enable: true
  new-system: true
  line-width: 200
  read-speed: 100.0
  handicap-chars: 10.0
  height: 0.2
```

## Длительность сообщения

### Формула длительности

```java
long duration = (countWords + handicapChars) / readSpeed * 1200;
```

Длительность = (`количество слов` + [`handicap-chars`](#handicap-chars)) / [`read-speed`](#read-speed) * `1200`

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/bubble/)
- [Права](/ru/permission/message/bubble/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `new-system`
- По умолчанию `true`

Включает работу сообщений над головой через Text Display

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет работать только на серверах 1.19.4 и выше
:::

### `line-width`
- По умолчанию `200`

Максимальное количество символов на одной строчке

### `read-speed`
- По умолчанию `100.0`

Скорость чтения символов сообщения

### `handicap-chars`
- По умолчанию `10.0`

Дополнительное время для коротких сообщений

### `height`
- По умолчанию `0.2`

Насколько высоко от головы будет сообщение

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет работать только на серверах 1.19.4 и выше, при включённом `new-system`
:::