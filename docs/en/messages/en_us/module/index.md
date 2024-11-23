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
    format: "dd'd' HH'h' mm'm' ss.SSS's'"
    zero: "0s"
```

## Параметры

- [Конфиг](/en/config/module/)
- [Права](/en/permissions/module/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- `format: "dd'd' HH'h' mm'm' ss.SSS's'"`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- `zero: "0s"`

Форматирование времени, если оно равно нулю