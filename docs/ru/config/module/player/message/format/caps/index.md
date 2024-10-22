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
  permission:
    name: "flectonepulse.module.player.message.format.caps"
    type: TRUE
  permission-ignore:
    name: "flectonepulse.module.player.message.format.caps.ignore"
    type: OP
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

### `permission`
- Название `flectonepulse.module.player.message.format.caps`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `permission-ignore`
- Название `flectonepulse.module.player.message.format.caps.ignore`
- Тип `OP`

[Право](/ru/config/module/#пояснение) для игнорирования проверки капса