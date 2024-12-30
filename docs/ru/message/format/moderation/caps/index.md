# Капс
Путь `message.yml > format.moderation.caps`

## Пояснение
Это форматирование убирает капс в сообщении
![caps](/caps.png)

## Редактирование
```yaml
<message.format.moderation.caps>
```

### По умолчанию
```yaml
caps:
  enable: false
  trigger: 0.7
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Права](/ru/permission/message/format/moderation/caps/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `trigger`
- По умолчанию `0.7`

Процент букв, которые должны быть в верхнем регистре, чтобы сообщение было изменено

::: tip Как правильно написать процент
`0.7` это `70%`

`1.0` это `100%` т.е всё сообщение
:::