# Обфусцирование
Путь `config.yml > module.player.message.format.obfuscated`

## Пояснение
Это форматирование делает текст нечитабельным между двумя `??`
![obfuscated](/obfuscated.png)

## Редактирование
```yaml
<config.module.player.message.format.obfuscated>
```

### По умолчанию
```yaml
obfuscated:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.obfuscated"
    type: TRUE
  trigger: "\\Q??\\E"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.obfuscated`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `\\Q??\\E`

Символы, между которыми должно быть заключено сообщение