# Курсив
Путь `config.yml > module.player.message.format.italic`

## Пояснение
Это форматирование делает текст _курсивом_ между двумя `##`
![italic](/italic.png)

## Редактирование
```yaml
<config.module.player.message.format.italic>
```

### По умолчанию
```yaml
italic:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.italic"
    type: TRUE
  trigger: "\\Q##\\E"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.italic`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q##\\E`

Символы, между которыми должно быть заключено сообщение