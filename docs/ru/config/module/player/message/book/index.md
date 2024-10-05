# Книга
Путь `config.yml > module.player.message.book`

## Пояснение
Модуль, отвечающий за сообщения в книге и названии этой книги
![book](/book.gif)

## Редактирование
```yaml
<config.module.player.message.book>
```

### По умолчанию
```yaml
book:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.book"
    type: TRUE
  listener:
    PlayerEditBookEvent: NORMAL
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.book`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `listener`
- По умолчанию:
```yaml
PlayerEditBookEvent: NORMAL
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->