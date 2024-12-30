# Телеграм
Путь `localizations > ru_ru.yml > integration.telegram`

## Пояснение
Сообщения интеграции с Телеграмом
![telegrammessage](/telegrammessage1.png)

## Редактирование
```yaml
<ru_ru.integration.telegram>
```

### По умолчанию
```yaml
telegram:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  message-channel:
    CHAT: "<final_message>"
```

## Параметры

- [Интеграция](/ru/integration/telegram/)
- [Права](/ru/permission/integration/telegram/)

### Плейсхолдеры

Ты можешь использовать все плейсхолдеры, которые используются в начальном сообщении для майнкрафта
::: tip Например для сообщения о блокировке
Там есть плейсхолдер `<reason>`, значит я могу использовать `<reason>` внутри телеграм сообщений
:::

Также есть плейсхолдеры, которые ТОЧНО будут заменяться в любом сообщении
- `<final_message>` сообщение, отправленное в майнкрафт
- `<final_clear_message>` сообщение, отправленное в майнкрафт без unicode-смайлов
- `<player>` ник игрока, который отправил сообщение

Очевидно, что все плейсхолдеры из `PlaceholderAPI` и `FlectonePulse` тоже будут работать

### `for-minecraft`
- По умолчанию `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Формат сообщения, которое будет отправлено из Телеграма в Майнкрафт

### `message-channel`

Список [сообщений](#типы-сообщении) с форматом итогового сообщения

::: tip Если хочешь добавить другое сообщение:
1. Возьми название из [списка](#типы-сообщении)
2. Вставь в `message-channel`
```yaml
название_сообщения: "<final_message>"
```
:::

<!--@include: @/ru/parts/messagetag.md-->
