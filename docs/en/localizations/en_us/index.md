# Русская локализация
Файл `localizations > en_us.yml`

## Пояснение
Русская локализация сообщений `FlectonePulse`

## Редактирование
```yaml
<en_us>
```

### По умолчанию
```yaml
cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>"
time:
  format: "dd'd' HH'h' mm'm' ss.SSS's'"
  zero: "0s"
```

## Параметры

- [Сообщения](/ru/message/)
- [Права](/ru/permissions/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- `format: "dd'д' HH'ч' mm'м' ss.SSS'с'"`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- `zero: "0s"`

Форматирование времени, если оно равно нулю