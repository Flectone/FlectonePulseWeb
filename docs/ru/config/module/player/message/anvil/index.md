# Наковальня
Путь `config.yml > module.player.message.anvil`

## Пояснение
Модуль, отвечающий за сообщения в наковальне при переименовании
![anvil](/anvil.gif)

## Редактирование
```yaml
<config.module.player.message.anvil>
```

### По умолчанию
```yaml
anvil:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.anvil"
    type: TRUE
  listener:
    InventoryClickEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.anvil`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
InventoryClickEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->