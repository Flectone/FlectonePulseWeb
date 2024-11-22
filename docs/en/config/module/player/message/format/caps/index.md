# Капс
Путь `config.yml > module.player.message.format.caps`

## Пояснение
Это форматирование убирает капс в сообщении
![caps](/caps.png)

## Редактирование
```yaml
<config.module.player.message.format.caps>
```

### По умолчанию
```yaml
caps:
  enable: true
  trigger: 0.7
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `trigger`
- По умолчанию `0.7`

Процент букв, которые должны быть в верхнем регистре, чтобы сообщение было изменено

::: tip Как правильно написать процент
`0.7` это `70%`

`1.0` это `100%` т.е всё сообщение
:::