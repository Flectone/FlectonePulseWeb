# Модули
Путь `messages > en_us.yml > module.*`

## Пояснение
Главная категория всех сообщений, а именно:
- [Комманды](/en/messages/en_us/module/command/)
- [Интеграции](/en/messages/en_us/module/integration/)
- [Взаимодействия](/en/messages/en_us/module/interaction/)
- [Игрок](/en/messages/en_us/module/player/)
- [Сервер](/en/messages/en_us/module/server/)
- [Теги](/en/messages/en_us/module/tag/)

## Редактирование
```yaml
<en_us.module>
```

### По умолчанию
```yaml
module:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>"
  time:
    day: "d"
    hour: "h"
    minute: "m"
    second: "s"
```

## Параметры

- [Конфиг](/en/config/module/)
- [Права](/en/permissions/module/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- По умолчанию:
```yaml
day: "d"
hour: "h"
minute: "m"
second: "s"
```

Форматирование времени