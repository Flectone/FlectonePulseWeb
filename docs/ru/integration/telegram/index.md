# Телеграм
Путь `integration.yml >telegram`

## Пояснение
Интеграция с Telegram позволяет отправлять сообщения:
- из Minecraft в Telegram
- из Telegram в Minecraft

![telegram message 1](/telegrammessage1.png)
![telegram message 2](/telegrammessage2.png)
![minecraft message](/telegramminecraftmessage.png)


## Редактирование
```yaml
<integration.telegram>
```

### По умолчанию
```yaml
telegram:
  enable: false
  token: ""
  message-channel:
    CHAT: []
    FROM_TELEGRAM_TO_MINECRAFT: []
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/integration/telegram/)
- [Права](/ru/permission/integration/telegram/)

### `enable`
- По умолчанию `false`

::: warning Важно
- Перед включением, вставь **токен** бота Telegram
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер
:::

Включает или выключает работоспособность модуля

### `token`
- По умолчанию `пусто`

[Токен](https://core.telegram.org/bots/faq#how-do-i-create-a-bot) бота для подключения

### `message-channel`

Список [типов сообщений](#типы-сообщений) и айди чатов в Telegram

::: tip Например я хочу, чтобы из Minecraft отправлялось сообщение комманды `/ban` в Telegram
1. Копирую айди чата, в которое нужно отправить сообщение (`-1002341720267_49`)
![telegram id](/telegramid.png)
2. Прописываю:
```yaml
message-channel:
  COMMAND_BAN:
    - "-1002341720267_49" // [!code highlight]
```

Чатов может быть сколько угодно, главное, чтобы к ним был доступ у бота из [секреты](/ru/secrets/telegram/)
:::

::: danger ВАЖНО

Если ваш канал является Форумом (Топиком), то айди **ГЛАВНОГО** канала нужно указывать без `_`

1. Айди моего главного канала (он всегда заканчивается на `_1`) это `-1002341720267_1` 
2. Значит вписывать нужно **ТОЛЬКО** `-1002341720267`

Для других чатов из форума это правило не действует и нужно вписывать **ПОЛНЫЙ** айди

:::

<!--@include: @/ru/parts/messagetag.md-->

