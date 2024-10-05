# Табличка
Путь `config.yml > module.player.message.sign`

## Пояснение
Модуль, отвечающий за сообщения на табличке
![sign](/signoak.gif)

## Редактирование
```yaml
<config.module.player.message.sign>
```

### По умолчанию
```yaml
sign:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.sign"
    type: TRUE
  listener:
    SignChangeEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.sign`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
SignChangeEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->