# Спойлер
Путь `config.yml > module.player.message.format.spoiler`

## Пояснение
Это форматирование скрывает сообщение, написанное между двумя `||`
![spoiler](/spoiler.png)

## Редактирование
```yaml
<config.module.player.message.format.spoiler>
```

### По умолчанию
```yaml
spoiler:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.spoiler"
    type: TRUE
  trigger: "\\Q||\\E"
```

## Параметры

- Сообщение и символ изменяются тут [Спойлер](/ru/messages/ru_ru/module/tag/spoiler/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.spoiler`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q||\\E`

Символы, между которыми должно быть заключено сообщение