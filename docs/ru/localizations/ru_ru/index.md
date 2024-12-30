# Русская локализация
Файл `localizations > ru_ru.yml`

## Пояснение
Русская локализация сообщений `FlectonePulse`

## Редактирование
```yaml
<ru_ru>
```

### По умолчанию
```yaml
cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>"
time:
  format: "dd'д' HH'ч' mm'м' ss.SSS'с'"
  zero: "0с"
```

## Параметры

- [Сообщения](/ru/message/)
- [Права](/ru/permissions/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`
- `format: "dd'д' HH'ч' mm'м' ss.SSS'с'"`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- `zero: "0с"`

Форматирование времени, если оно равно нулю