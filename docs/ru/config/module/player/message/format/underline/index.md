# Нижнее подчёркивание
Путь `config.yml > module.player.message.format.underline`

## Пояснение
Это форматирование делает текст подчёркнутым между двумя `__`
![underline](/underline.png)

## Редактирование
```yaml
<config.module.player.message.format.underline>
```

### По умолчанию
```yaml
underline:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.underline"
    type: TRUE
  trigger: "\\Q__\\E"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.underline`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q__\\E`

Символы, между которыми должно быть заключено сообщение