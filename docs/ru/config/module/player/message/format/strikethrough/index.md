# Перечёркивание
Путь `config.yml > module.player.message.format.strikethrough`

## Пояснение
Это форматирование делает текст перечёркнутым между двумя `~~`
![strikethrough](/strikethrough.png)

## Редактирование
```yaml
<config.module.player.message.format.strikethrough>
```

### По умолчанию
```yaml
strikethrough:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.strikethrough"
    type: TRUE
  trigger: "\\Q~~\\E"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.strikethrough`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q~~\\E`

Символы, между которыми должно быть заключено сообщение