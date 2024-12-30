# Упоминание
Путь `message.yml > format.mention`

## Пояснение
Это форматирование позволяет упоминать (пинговать) человека в сообщении
![mention](/mention.png)

## Редактирование
```yaml
<message.format.mention>
```

### По умолчанию
```yaml
mention:
  enable: true
  trigger: "@"
  sound:
    enable: true
    type: "ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/format/mention/)
- [Права](/ru/permission/message/format/mention/)

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
### `sound`
- По умолчанию `true`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1`

Определяет тип (`ENTITY_EXPERIENCE_ORB_PICKUP`), громкость (`0.1`) и тональность (`0.1`) звука через `:`
:::