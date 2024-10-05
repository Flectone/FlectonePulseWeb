# Упоминание
Путь `config.yml > module.player.message.format.mention`

## Пояснение
Это форматирование позволяет упоминать (пинговать) человека в сообщении
![mention](/mention.png)

## Редактирование
```yaml
<config.module.player.message.format.mention>
```

### По умолчанию
```yaml
mention:
  enable: true
  trigger: "@"
  permission:
    name: "flectonepulse.module.player.message.format.mention"
    type: TRUE
  sound:
    enable: true
    type: "ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1"
    permission:
      name: "flectonepulse.module.player.message.format.mention.sound"
      type: TRUE
```

## Параметры

- Формат упоминания изменяется тут [Упоминание](/ru/messages/ru_ru/module/player/message/mention/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `trigger`
- По умолчанию `@`

Символ, с которого должно начинаться сообщение упоминания
::: tip Например
Если я хочу упомянуть `Flectone`, то я должен написать `@Flectone`
![mention](/mention.png)
:::

### `permission`
- Название `flectonepulse.module.player.message.format.mention`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1`

Определяет тип (`ENTITY_EXPERIENCE_ORB_PICKUP`), громкость (`0.1`) и тональность (`0.1`) звука через `:`

### `permission`
- Название `flectonepulse.module.player.message.format.mention.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::