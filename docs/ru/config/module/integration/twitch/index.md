# Твич
Путь `config.yml > module.integration.twitch`

## Пояснение
Интеграция с Twitch позволяет отправлять сообщения:
- из Minecraft в Twitch
- из Twitch в Minecraft

![twitch message](/twitchmessage.png)
![minecraft message](/twitchminecraftmessage.png)


## Редактирование
```yaml
<config.module.integration.twitch>
```

### По умолчанию
```yaml
twitch:
  enable: false
  channel:
    FROM_TWITCH_TO_MINECRAFT: []
    CHAT: []
```

## Параметры

- Итоговый формат сообщения изменяется тут [Твич](/ru/messages/ru_ru/module/integration/twitch/)

### `enable`
- По умолчанию `false`

::: warning Важно
- Перед включением, вставь **токен** и **ID клиента** Twitch в [секретах](/ru/secrets/twitch/)
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер, иначе плагин может вызвать зависание
:::

Включает или выключает работоспособность модуля

### `channel`

Список [типов сообщений](#типы-сообщений) и названий каналов на Twitch

::: tip Например я хочу, чтобы из Minecraft отправлялось сообщение в Twitch
1. Копирую названия каналов Twitch, в которые нужно отправить сообщение (`faseri4ka`)
2. Прописываю:
```yaml
channel:
  CHAT:
    - "faseri4ka" // [!code highlight]
```

Каналов может быть сколько угодно, главное, чтобы к ним был доступ у клиента из [секреты](/ru/secrets/twitch/)
:::

<!--@include: @/ru/parts/messagetag.md-->

