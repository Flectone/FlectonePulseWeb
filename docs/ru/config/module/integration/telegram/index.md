# Телеграм
Путь `config.yml > module.integration.telegram`

## Пояснение
Интеграция с Telegram позволяет отправлять сообщения:
- из Minecraft в Telegram
- из Telegram в Minecraft

![telegram message 1](/telegrammessage1.png)
![telegram message 2](/telegrammessage2.png)
![minecraft message](/telegramminecraftmessage.png)


## Редактирование
```yaml
<config.module.integration.telegram>
```

### По умолчанию
```yaml
telegram:
  enable: false
  message-channel:
    CHAT: []
    FROM_TELEGRAM_TO_MINECRAFT: []
```

## Параметры

- [Сообщения](/ru/messages/ru_ru/module/integration/telegram/)
- [Права](/ru/permissions/module/integration/telegram/)

### `enable`
- По умолчанию `false`

::: warning Важно
- Перед включением, вставь **токен** бота Telegram в [секретах](/ru/secrets/telegram/)
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер
:::

Включает или выключает работоспособность модуля

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

::: danger Если ваш канал является Форумом (Топиком)

Айди **ГЛАВНОГО** канала нужно указывать без `_`

1. Айди моего главного канала (он всегда заканчивается на `_1`) это `-1002341720267_1` 
2. Значит вписывать нужно **ТОЛЬКО** `-1002341720267`

Для других чатов из форума это правило не действует и нужно вписывать **ПОЛНЫЙ** айди

:::

<!--@include: @/ru/parts/messagetag.md-->

