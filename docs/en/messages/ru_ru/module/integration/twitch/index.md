# Твич
Путь `messages > ru_ru.yml > module.integration.twitch`

## Пояснение
Сообщения интеграции с Твичом
![twitchmessage](/twitchmessage.png)

## Редактирование
```yaml
<ru_ru.module.integration.twitch>
```

### По умолчанию
```yaml
twitch:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  message-channel:
    CHAT: "<final_message>"
```

## Параметры

- [Конфиг](/en/config/module/integration/twitch/)
- [Права](/en/permissions/module/integration/twitch/)

### Плейсхолдеры

Ты можешь использовать все плейсхолдеры, которые используются в начальном сообщении для майнкрафта
::: tip Например для сообщения о блокировке
Там есть плейсхолдер `<reason>`, значит я могу использовать `<reason>` внутри твич сообщений
:::

Также есть плейсхолдеры, которые ТОЧНО будут заменяться в любом сообщении
- `<final_message>` сообщение, отправленное в майнкрафт
- `<final_clear_message>` сообщение, отправленное в майнкрафт без unicode-смайлов
- `<player>` ник игрока, который отправил сообщение

Очевидно, что все плейсхолдеры из `PlaceholderAPI` и `FlectonePulse` тоже будут работать

### `for-minecraft`
- По умолчанию `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Формат сообщения, которое будет отправлено из Твича в Майнкрафт

### `message-channel`

Список [сообщений](#типы-сообщении) с форматом итогового сообщения

::: tip Если хочешь добавить другое сообщение:
1. Возьми название из [списка](#типы-сообщении)
2. Вставь в `message-channel`
```yaml
название_сообщения: "<final_message>"
```
:::

<!--@include: @/en/parts/messagetag.md-->
