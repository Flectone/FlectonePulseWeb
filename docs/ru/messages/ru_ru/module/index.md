# Модули
Путь `messages > ru_ru.yml > module.*`

## Пояснение
Главная категория всех сообщений, а именно:
- [Комманды](/ru/messages/ru_ru/module/command/)
- [Интеграции](/ru/messages/ru_ru/module/integration/)
- [Взаимодействия](/ru/messages/ru_ru/module/interaction/)
- [Игрок](/ru/messages/ru_ru/module/player/)
- [Сервер](/ru/messages/ru_ru/module/server/)
- [Теги](/ru/messages/ru_ru/module/tag/)

## Редактирование
```yaml
<ru_ru.module>
```

### По умолчанию
```yaml
module:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>"
  time:
    day: "д"
    hour: "ч"
    minute: "м"
    second: "с"
```

## Параметры

- [Конфиг](/ru/config/module/)
- [Права](/ru/permissions/module/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- По умолчанию:
```yaml
day: "д"
hour: "ч"
minute: "м"
second: "с"
```

Форматирование времени