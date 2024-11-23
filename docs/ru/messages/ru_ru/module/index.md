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
    format: "dd'д' HH'ч' mm'м' ss.SSS'с'"
    zero: "0с"
```

## Параметры

- [Конфиг](/ru/config/module/)
- [Права](/ru/permissions/module/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- `format: "dd'д' HH'ч' mm'м' ss.SSS'с'"`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- `zero: "0с"`

Форматирование времени, если оно равно нулю