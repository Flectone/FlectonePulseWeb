# Автоматическое
Путь `messages > ru_ru.yml > module.server.message.auto`

## Пояснение
Автоматическое сообщение раз в какой-то промежуток времени
![auto](/auto.png)

## Редактирование
```yaml
<ru_ru.module.server.message.auto>
```

### По умолчанию
```yaml
auto:
  format:
    1:
      - " "
      - "<fcolor:1>◇ Сервер использует <url:\"https://flectone.net/pulse/\"><fcolor:2>FlectonePulse</url> :)"
      - " "
    2:
      - " "
      - "<fcolor:1>      ❝ Заходи в дискорд ❠ "
      - "<fcolor:2>    <u><url:https://discord.flectone.net>https://discord.flectone.net</url></u>"
      - " "
    3:
      - " "
      - "<fcolor:1>⚡ Поддержи <fcolor:2>FlectonePulse</fcolor:2> на Boosty "
      - "<fcolor:1>⚡ <u><url:\"https://boosty.to/thefaser/\">https://boosty.to/thefaser/</url></u>"
      - " "
```

## Параметры

- Конфигурация происходит тут [Автоматическое](/ru/config/module/server/message/auto/)

### `format`
- По умолчанию:
```yaml
1:
  - " "
  - "<fcolor:1>◇ Сервер использует <url:\"https://flectone.net/pulse/\"><fcolor:2>FlectonePulse</url> :)"
  - " "
2:
  - " "
  - "<fcolor:1>      ❝ Заходи в дискорд ❠ "
  - "<fcolor:2>    <u><url:https://discord.flectone.net>https://discord.flectone.net</url></u>"
  - " "
3:
  - " "
  - "<fcolor:1>⚡ Поддержи <fcolor:2>FlectonePulse</fcolor:2> на Boosty "
  - "<fcolor:1>⚡ <u><url:\"https://boosty.to/thefaser/\">https://boosty.to/thefaser/</url></u>"
  - " "
```

Список индексов и сообщений, которые им соответствуют

::: danger Обязательно
Индексы должны идти по порядку без пропусков, т.е. `1`, `2`, `3`, `4` и т.д.
:::