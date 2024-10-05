# Жирный
Путь `config.yml > module.player.message.format.bold`

## Пояснение
Это форматирование делает текст **жирным** между двумя `**`
![bold](/bold.png)

## Редактирование
```yaml
<config.module.player.message.format.bold>
```

### По умолчанию
```yaml
bold:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.bold"
    type: TRUE
  trigger: "\\Q**\\E"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.bold`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q**\\E`

Символы, между которыми должно быть заключено сообщение