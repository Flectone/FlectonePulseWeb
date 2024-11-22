# Модули
Путь `messages > en_us.yml > module.*`

## Пояснение
Главная категория всех сообщений, а именно:
- [Комманды](/ru/messages/en_us/module/command/)
- [Интеграции](/ru/messages/en_us/module/integration/)
- [Взаимодействия](/ru/messages/en_us/module/interaction/)
- [Игрок](/ru/messages/en_us/module/player/)
- [Сервер](/ru/messages/en_us/module/server/)
- [Теги](/ru/messages/en_us/module/tag/)

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

- [Конфиг](/ru/config/module/)
- [Права](/ru/permissions/module/)

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