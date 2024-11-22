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

- [Сообщения](/ru/messages/ru_ru/module/player/message/bubble/)
- [Права](/ru/permissions/module/player/message/bubble/)

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