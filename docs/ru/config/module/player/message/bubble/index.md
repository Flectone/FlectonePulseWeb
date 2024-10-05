# Над головой
Путь `config.yml > module.player.message.bubble`

## Пояснение
Модуль, отвечающий за сообщения над головой
![bubble](/bubble.gif)

Идея взята из [LightChatBubbles](https://github.com/atesin/LightChatBubbles), спасибо @atesin

## Редактирование
```yaml
<config.module.player.message.bubble>
```

### По умолчанию
```yaml
bubble:
  enable: true
  max-per-line: 35
  handicap-chars: 10
  read-speed: 800
  permission:
    name: "flectonepulse.module.player.message.bubble"
    type: TRUE
  listener:
    AsyncPlayerChatEvent: MONITOR
```

## Длительность сообщения

### Формула длительности

```java
int duration = (messageLength + handicapChars * countStrings) * 1200 / readSpeed;
```

Длительность = <br>
(`длина сообщения` + [`handicap-chars`](#handicap-chars) * [`количество строк`](#формула-количества-строк)) * `1200` / [`read-speed`](#read-speed)

### Формула количества строк

```java
int countStrings = messageLength / maxPerLine;
```

Грубо говоря, это значение примерно равно `длина сообщения` / [`max-per-line`](#max-per-line)

## Параметры

- Формат сообщения изменяется тут [Над головой](/ru/messages/ru_ru/module/player/message/bubble/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `max-per-line`
- По умолчанию `35`

Максимальное количество символов на одной строчке

### `handicap-chars`
- По умолчанию `10`

Дополнительное время, чтобы заметить сообщение

### `read-speed`
- По умолчанию `800`

Скорость чтения символов сообщения

### `permission`
- Название `flectonepulse.module.player.message.bubble`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
AsyncPlayerChatEvent: MONITOR
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->